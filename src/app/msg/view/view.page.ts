import { Component, OnInit } from '@angular/core';

// 10.1) Importa dependências
import { Router } from '@angular/router';
import { StorageMap } from '@ngx-pwa/local-storage';
import { AppService } from 'src/app/services/app.service';

// 12.1) Importa dependências
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  // 10.3) Armazena dados do usuário
  userData: any;
  userProfile: any;

  // 12.3) Variáveis com parâmetros da rota e mensagem
  msgParams: any;
  viewMsg: any;
  otherUSerID: any;

  constructor(

    // 10.2) Injeta dependências
    public router: Router,
    public app: AppService,
    public storage: StorageMap,

    // 12.2) Injeta dependências
    private route: ActivatedRoute,
    public fbStore: AngularFirestore,
  ) { }

  ngOnInit() {

    // 12.4) Obtém nome da caixa (inbox / outbox) e Id da mensagem
    this.route.params.subscribe(atributes => {
      this.msgParams = atributes;
    });
  }

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

                  // 12.5) Obtém a mensagem única
                  this.getMessage();
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

  // 12.6) Obtém a mensagem única
  public getMessage() {

    // Consulta o banco de dados
    this.fbStore.collection(
      `messages/${this.userData.uid}/${this.msgParams.msgBox}`
    ).doc(this.msgParams.msgId).valueChanges().subscribe(
      (mData) => {
        this.viewMsg = mData;

        // 13.1) Melhora visualização da mensagem
        this.viewMsg.message = this.viewMsg.message.replace(/\\r\\n/g, '<br />');

        // Obtém uid do interlocutor.
        if (this.msgParams.msgBox === 'inbox') {
          this.otherUSerID = this.viewMsg.from;
        } else {
          this.otherUSerID = this.viewMsg.to;
        }

        // Obtém o nome do interlocutor da mensagem
        this.fbStore.doc<any>(`users/${this.otherUSerID}`).valueChanges().subscribe(
          (data) => {

            // 13.2) Formata remetente da mensagem
            if (this.msgParams.msgBox === 'inbox') {
              this.viewMsg.interlocutor = `De: <a href="${this.viewMsg.from}">${data.name}</a>`;
            } else {
              this.viewMsg.interlocutor = `Para: <a href="${this.viewMsg.to}">${data.name}</a>`;
            }
          }
        );

        // 18.1) Atualiza status da mensagem para "Lida"
        if (this.msgParams.msgBox === 'inbox' && this.viewMsg.status === 'Não lida') {
          this.fbStore.collection(`messages/${this.userData.uid}/${this.msgParams.msgBox}`)
            .doc(this.msgParams.msgId).update({ status: 'Lida' });
        }
      }
    );
  }
}
