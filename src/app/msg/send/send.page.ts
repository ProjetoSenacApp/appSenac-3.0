import { Component, OnInit } from '@angular/core';

// 10.1) Importa dependências
import { Router } from '@angular/router';
import { StorageMap } from '@ngx-pwa/local-storage';
import { AppService } from 'src/app/services/app.service';

// 17.1) Importa dependências
import { FormGroup, FormBuilder, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { EventsService } from 'src/app/services/events.service';

// 18.1) Importa dependências
import { DatePipe } from '@angular/common';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-send',
  templateUrl: './send.page.html',
  styleUrls: ['./send.page.scss'],
})
export class SendPage implements OnInit {

  // 10.3) Armazena dados do usuário
  userData: any;
  userProfile: any;

  // 17.3) Atributos
  usersList: any; // Lista de destinatários
  sendForm: any; // Formulário

  // 18.3) Atributos
  msgSend: any; // Mensagem a ser enviada
  pipe = new DatePipe('en_US'); // Use your own locale

  constructor(

    // 10.2) Injeta dependências
    public router: Router,
    public app: AppService,
    public storage: StorageMap,

    // 17.2) Injeta dependências
    private formBuilder: FormBuilder,
    public fbStore: AngularFirestore,
    public events: EventsService,

    // 18.2) Injeta dependências
    public alertController: AlertController
  ) { }

  ngOnInit() { }

  // 10.4) Se tem perfil, obtém dados.
  //       Se não tem, vai para "novo perfil"
  ionViewWillEnter() {

    // Testa o perfil local (true e false)
    this.app.isProfile().then(
      (data) => {

        // Se existe, faz as ações da página
        if (data) {

          // Obtém dados do login local e armazena em 'userData'
          this.storage.get('userData', { type: 'string' }).subscribe(
            (uData) => {
              this.userData = JSON.parse(uData);

              // Obtém dados do perfil local e armazena em 'userProfile'
              this.storage.get('userProfile', { type: 'string' }).subscribe(
                (pData) => {
                  this.userProfile = JSON.parse(pData);

                  // 17.4) Obtém lista de destinatários.
                  //  É necessário criar um índice no Cloud Firestore, para isso, acesse o link no console de erro.
                  this.fbStore.collection(
                    'users',
                    ref => ref.where('status', '==', 'ativo').orderBy('name')
                  ).valueChanges({ idField: 'uid' }).subscribe(
                    (usData) => {
                      this.usersList = usData;

                      // 17.5) Cria formulário
                      this.sendFormCreate();
                    }
                  );
                }
              );
            }
          );

          // Se não existe perfil, vai para o cadastro de perfil
        } else {
          this.router.navigate(['/user/new']);
        }
      });
  }

  // 17.6) Cria formulário ReactiveFormsModule
  async sendFormCreate() {

    this.sendForm = this.formBuilder.group({
      userTo: [
        null,
        Validators.compose([Validators.required])
      ],
      subject: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])
      ],
      message: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      ]
    });
  }

  // 17.7) Processa envio da mensagem
  sendSubmit() {

    // 18.4) Formata mensagem para database
    this.msgSend = {
      from: this.userData.uid.trim(),
      to: this.sendForm.value.userTo.trim(),
      date: this.pipe.transform(Date.now(), 'yyyy-MM-dd hh:mm:ss').trim(),
      subject: this.sendForm.value.subject.trim(),
      message: this.sendForm.value.message.trim(),
      status: 'Não lida'
    };

    // 18.5) Salva mensagem na caixa de entrada do destinatário
    this.fbStore.collection(`messages/${this.msgSend.to}/inbox`).add(this.msgSend)
      .then((docRef) => {

        // 18.6) Altera status da mensagem
        this.msgSend.status = 'Enviada';

        // 18.7) Salva mensagem na caixa de saída do remetente
        this.fbStore.collection(`messages/${this.msgSend.from}/outbox`).doc(docRef.id).set(this.msgSend)
          .then(() => {

            // 18.8) Feedback
            this.presentAlertConfirm();
          });
      });
  }

  // 18.9) Feedback
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
