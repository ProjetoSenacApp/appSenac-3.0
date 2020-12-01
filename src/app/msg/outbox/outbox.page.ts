  
import { Component, OnInit } from '@angular/core';

// 10.1) Importa dependências
import { Router } from '@angular/router';
import { StorageMap } from '@ngx-pwa/local-storage';
import { AppService } from 'src/app/services/app.service';

// 21.1) Importa dependências
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-outbox',
  templateUrl: './outbox.page.html',
  styleUrls: ['./outbox.page.scss'],
})
export class OutboxPage implements OnInit {

  // 10.3) Armazena dados do usuário
  userData: any;
  userProfile: any;

  // 21.3) Atributos
  public allMessages: any[any]; // View com todas as mensagens

  constructor(

    // 10.2) Injeta dependências
    public router: Router,
    public app: AppService,
    public storage: StorageMap,

    // 21.2) Injeta dependências
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

                  // 21.4) Obtém todas as mensagens para a 'view'
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


  // 21.5) Obtém todas as mensagens para a 'view'
  getAllMessages() {

    // Lê mesangens do banco de dados com base no Id do usuário logado
    this.fbStore.collection(
      `messages/${this.userData.uid}/outbox`,
      ref => ref.orderBy('date', 'desc')
    ).valueChanges({ idField: 'msgId' }).subscribe(
      (mData) => {

        // Variável local para as mensagens
        const allMessages = [];

        // Obtém cada mensagem recebida
        mData.forEach(
          (msgData: any) => {

            // Não exibe mensagens apagadas
            if (msgData.status !== 'Apagada') {

              // Obtém o nome de que enviou a mensagem
              this.fbStore.doc<any>(`users/${msgData.from}`).valueChanges().subscribe(
                (data) => {
                  msgData.fromName = data.name;

                  // Seleciona ícone conforme status da mensagem
                  msgData.statusIcon = 'send-outline';

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