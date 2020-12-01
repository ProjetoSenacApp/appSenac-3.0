import { Component, OnInit } from '@angular/core';

// 15.1) Importa dependências
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AppService } from '../../services/app.service';
import { EventsService } from 'src/app/services/events.service';

// 19.1) Importa dependências
import { DatePipe } from '@angular/common';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {

  // 15.3) Cria atributos
  messageForm: FormGroup; // ReactiveForm
  userData: any; // Dados do usuário logado
  userProfile: any; // Perfil do usuário logado
  msgToReply: any; // Mensagem original
  msgParams: any; // Parâmetros da rota ('box' e 'msgId')
  msgWhon: any; // Dados do correspondente ('from' ou 'to')
  btnText = 'Enviar resposta'; // Texto do botão de envio

  // 19.3) Cria atributos
  msgReply: any; // Mensagem de resposta
  msgSend: any; // Mensagem a ser enviada
  pipe = new DatePipe('en_US'); // Formatação da data

  constructor(

    // 15.2) Injeta dependências
    private formBuilder: FormBuilder,
    public storage: StorageMap,
    public router: Router,
    public fbStore: AngularFirestore,
    public app: AppService,
    public events: EventsService,
    private route: ActivatedRoute,

    // 19.2) Injeta dependências
    public alertController: AlertController,
  ) {

    // 15.4) Obtém nome da caixa (inbox / outbox) e Id da mensagem (-> msgParams)
    this.route.params.subscribe(atributes => { this.msgParams = atributes; });

    // 15.5) Obtém dados do usuário logado (-> userData e userProfile)
    this.storage.get('userData', { type: 'string' }).subscribe((uData) => {
      if (!uData) { this.router.navigate(['/user/login']); }
      this.userData = JSON.parse(uData);
      this.storage.get('userProfile', { type: 'string' }).subscribe((pData) => {
        if (!pData) { this.router.navigate(['/user/new']); }
        this.userProfile = JSON.parse(pData);
      });

      // 15.6) Obtém mensagem a ser respondida (-> msgToReply)
      this.fbStore.collection(`messages/${this.userData.uid}/${this.msgParams.msgBox}`)
        .doc(this.msgParams.msgId).valueChanges().subscribe(
          (msgData) => {
            this.msgToReply = msgData;

            // 15.7) Obtém dados do correspondente (-> msgWhon)
            this.fbStore.collection('users').doc(this.msgToReply.from).valueChanges().subscribe(
              (wData) => {
                this.msgWhon = wData;

                // 15.8) Cria formulário (-> messageForm)
                this.messageFormCreate();
              }
            );
          });
    });
  }

  ngOnInit() { }

  // 15.9) Cria formulário da memsagem usando ReactiveForms
  async messageFormCreate() {
    this.messageForm = this.formBuilder.group({

      userTo: [
        this.msgWhon.name
      ],

      subject: [
        `Re: ${this.msgToReply.subject}`,
        Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])
      ],

      message: [

        // 19.10) Mensagem da resposta
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      ]

    });
  }

  // 15.10) Processa envio da mensagem
  messageSubmit() {

    // 19.4) Formata mensagem de resposta
    const msgOriginal = `\n\n\n--------------------\nMensagem original:\n--------------------\n${this.msgToReply.message}\n--------------------`;
    this.msgReply = {
      date: this.pipe.transform(Date.now(), 'yyyy-MM-dd hh:mm:ss').trim(),
      from: this.userData.uid.trim(),
      to: this.msgToReply.from.trim(),
      subject: this.messageForm.value.subject.trim(),
      message: this.messageForm.value.message.trim() + msgOriginal,
      status: 'Não lida'
    };

    // 19.5) Salva mensagem na caixa de entrada do destinatário
    this.fbStore.collection(`messages/${this.msgReply.to}/inbox`).add(this.msgReply)
      .then((docRef) => {

        // 19.6) Altera status da mensagem
        this.msgReply.status = 'Enviada';

        // 19.7) Salva mensagem na caixa de saída do remetente
        this.fbStore.collection(`messages/${this.msgReply.from}/outbox`).doc(docRef.id).set(this.msgReply)
          .then(() => {

            // 19.8) Feedback
            this.presentAlertConfirm();
          });
      });
  }

  // 19.9) Feedback
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Mensagem enviada',
      message: 'Sua mensagem foi enviada com sucesso!<br><br>Clique em [Ok] para voltar à caixa de entrada.',
      buttons: [
        {
          text: 'Ok',
          handler: () => { this.router.navigate(['/msg/inbox']); }
        }
      ]
    });
    await alert.present();
  }
}