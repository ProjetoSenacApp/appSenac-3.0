import { Component, OnInit } from '@angular/core';

// 16.1) Importa dependências
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { StorageMap } from '@ngx-pwa/local-storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { EventsService } from 'src/app/services/events.service';
import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {

  // 16.3) Atributos de uso geral
  userData: any; // Dados do usuário
  authProvider: any; // Conexão com provedor social

  constructor(

    // 16.2) Injeta dependências
    public router: Router,
    public app: AppService,
    public storage: StorageMap,
    public fbAuth: AngularFireAuth,
    public fbStore: AngularFirestore,
    public events: EventsService,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    // 16.4) Obtém o perfil local
    this.storage.get('userData', { type: 'string' }).subscribe(
      (uData: any) => {
        this.userData = JSON.parse(uData);
      }
    );
  }

  // 16.5) Processa remoção completa do cadastro
  accountDelete() {

    // Seleciona o provedor de login social
    switch (this.userData.provider) {
      case 'google': this.authProvider = new auth.GoogleAuthProvider(); break;
      case 'facebook': this.authProvider = new auth.FacebookAuthProvider(); break;
      case 'twitter': this.authProvider = new auth.TwitterAuthProvider(); break;
      case 'github': this.authProvider = new auth.GithubAuthProvider(); break;
      // case ....
    }

    // Por segurança, força reautenticação do usuário
    auth().currentUser.reauthenticateWithPopup(this.authProvider).then(
      () => {

        // Apaga perfil e login local e global
        this.storage.delete('userData').subscribe();
        this.storage.delete('userProfile').subscribe();
        this.events.publish('userData', null);
        this.events.publish('userProfile', null);

        // 'Apaga' perfil no Cloud Firestore
        this.fbStore.collection(`users`).doc(this.userData.uid).update({ status: 'apagado' });

        // Apaga usuário do Firebase Authentication
        auth().currentUser.delete().then(() => {

          // Roteia a página inicial
          this.router.navigate(['/']);
        });
      }
    );
  }
}
