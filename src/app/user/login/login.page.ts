import { Component, OnInit } from '@angular/core';

// 3.1) Importa dependências
import { AngularFireAuth } from '@angular/fire/auth'; // Autenticação
import { auth } from 'firebase/app'; // Firebase CLI
import { StorageMap } from '@ngx-pwa/local-storage'; // Armazenamento local
import { AngularFirestore } from '@angular/fire/firestore'; // Firestore
import { Router } from '@angular/router'; // Roteamento
import { AppService } from '../../services/app.service'; // Serviços de uso geral
import { EventsService } from '../../services/events.service'; // Dispara eventos globais

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // 3.2) Variáveis locais
  authProvider: any; // Provedor de login social
  userData: any; // Dados do login do usuário
  userProfile: any; // Dados do perfil do usuário

  constructor(

    // 3.3) Injeção de dependências
    public fbAuth: AngularFireAuth, // Autenticação
    public fbStore: AngularFirestore, // Firestore
    private storage: StorageMap, // Armazenamento local
    public app: AppService, // Serviços de uso geral
    public router: Router, // Roteamento
    public events: EventsService, // Dispara eventos globais
  ) { }

  ngOnInit() { }

  // 3.4) Ação do botão de login
  async login(provider: string) {

    // Seleção do provedor de login social
    // - Adicione outros provedores conforme a configuração do Firebase Authentication
    switch (provider) {

      case 'google':
        this.authProvider = new auth.GoogleAuthProvider();
        break;

      case 'facebook':
        alert('Você precisa implementar isso no Firebase Authentication!');
        return false;
        // this.authProvider = new auth.FacebookAuthProvider();
        break;

      case 'twitter':
        alert('Você precisa implementar isso no Firebase Authentication!');
        return false;
        // this.authProvider = new auth.TwitterAuthProvider();
        break;

      case 'github':
        alert('Você precisa implementar isso no Firebase Authentication!');
        return false;
        // this.authProvider = new auth.GithubAuthProvider();
        break;

      // case ....

    }

    // Login com popup no Firebase Auth
    this.fbAuth.signInWithPopup(this.authProvider)

      // Se logou
      .then((data) => {

        // Formata dados do usuário
        this.userData = {
          uid: data.user.uid,
          displayName: data.user.displayName,
          email: data.user.email,
          photoURL: data.user.photoURL,

          // 8.1) Provedor de login usado
          provider
        };

        // Salva no armazenamento local
        this.storage.set('userData', JSON.stringify(this.userData)).subscribe({
          next: () => {

            // 3.6) Atualiza 'userData' no menu principal também (app.component.ts)
            this.events.publish('userData', this.userData);

            // Verifica se tem perfil no Firestore
            this.fbStore.firestore.collection('users').doc(this.userData.uid).get()
              .then((uData) => {

                // Se tem perfil
                if (uData.exists) {

                  // Obtém dados do perfil
                  this.userProfile = uData.data();
                  this.userProfile.uid = uData.id;

                  // Grava perfil no armazenamento local
                  this.storage.set('userProfile', JSON.stringify(this.userProfile)).subscribe({
                    next: () => {

                      // 10.1) Atualiza 'userProfile' no menu principal (app.component.ts)
                      this.events.publish('userProfile', this.userData);

                      // Exibe alerta
                      this.app.myAlert(
                        `Olá ${this.userData.displayName}`,
                        `Você já pode acessar todos os recursos do aplicativo.`
                      );

                      // Vai para a raiz
                      this.router.navigate(['/']);
                    },
                    error: (error) => { console.error(error); }
                  });

                  // Se não tem perfil
                } else {

                  // 4.1) COMENTE --> Exibe alerta e vai para a rota '/user/new'
                  // this.app.myAlert(
                  //   `Olá ${this.userData.displayName}`,
                  //   `Você precisa completar seu cadastro para usar todos os recursos do aplicativo.`
                  // );

                  // Vai para o cadatro de novo perfil
                  this.router.navigate(['/user/new']);
                }
              })
              .catch((error) => { console.error(error); });
          },
          error: (error) => { console.error(error); }
        });
      })
      .catch((error) => { console.log(error); });
  }
}
