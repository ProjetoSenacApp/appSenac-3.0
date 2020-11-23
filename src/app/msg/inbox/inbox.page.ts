import { Component, OnInit } from '@angular/core';

// 10.1) Importa dependências
import { Router } from '@angular/router';
import { StorageMap } from '@ngx-pwa/local-storage';
import { AppService } from 'src/app/services/app.service';

// 11.1) Importa as dependências
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {

  // 10.3) Armazena dados do usuário
  userData: any;
  userProfile: any;

  // 11.3) Variável com todas as mensagens para a 'view'
  public allMessages: any[any];

  constructor(

    // 10.2) Injeta dependências
    public router: Router,
    public app: AppService,
    public storage: StorageMap,

    // 11.2) Injeta dependências
    public fbStore: AngularFirestore,

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

                  // 11.4) Obtém todas as mensagens para a 'view'
                  this.getAllMessages();
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

  // 11.5) Obtém todas as mensagens para a 'view'
  getAllMessages() {

    // Lê mesangens do banco de dados com base no Id do usuário logado
    this.fbStore.collection(
      `messages/${this.userData.uid}/inbox`,
      ref => ref.orderBy('date', 'desc')
    ).valueChanges({ idField: 'msgId' }).subscribe(
      (mData) => {

        // Variável local para as mensagens
        const allMessages = [];

        // Obtém cada mensagem recebida
        mData.forEach(
          (msgData: any) => {

            // 13.1) Não exibe mensagens apagadas
            if (msgData.status !== 'Apagada') {

              // Obtém o nome de que enviou a mensagem
              this.fbStore.doc<any>(`users/${msgData.from}`).valueChanges().subscribe(
                (data) => {
                  msgData.fromName = data.name;

                  // 14) Seleciona ícone conforme status da mensagem
                  switch (msgData.status) {
                    case 'Não lida':
                      msgData.statusIcon = 'mail-outline';
                      break;
                    case 'Lida':
                      msgData.statusIcon = 'mail-open-outline';
                      break;
                    case 'Respondida':
                      msgData.statusIcon = 'send-outline';
                      break;
                  }

                  // Lista mensagem em "todas as mensagens"
                  allMessages.push(msgData);
                }
              );
            }
          }
        );

        // Envia mensagens para a view
        this.allMessages = allMessages;
      });
  }
}
