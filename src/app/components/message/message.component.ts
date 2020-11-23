import { Component, OnInit } from '@angular/core';

// 15.1) Importa dependências
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AppService } from '../../services/app.service';
import { EventsService } from 'src/app/services/events.service';

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

  constructor(

    // 15.2) Injeta dependências
    private formBuilder: FormBuilder,
    public storage: StorageMap,
    public router: Router,
    public fbStore: AngularFirestore,
    public app: AppService,
    public events: EventsService,
    private route: ActivatedRoute,
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
        `\n\nMensagem original: \n--------------------\n${this.msgToReply.message}\n--------------------\n`,
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      ]

    });
  }

  // 15.10) Processa envio da mensagem
  messageSubmit() {
    console.log(this.messageForm.value);
  }

}
