import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// 3.1) Importa dependências
import { StorageMap } from '@ngx-pwa/local-storage'; // Armazenamento local
import { EventsService } from './services/events.service'; // Dispara eventos globais

// 18.1) Importa dependências
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  // 3.2) Variável com dados do usuário logado
  userData: any;

  // 10.1) Variável com perfil do usuário
  userProfile: any;

  // 18.3) Atributos
  totalItems: any; // Total de nensagens não lidas

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,

    // 3.3) Injeta dependências
    public events: EventsService, // Dispara eventos globais
    public storage: StorageMap, // Armazenamento local

    // 18.2) Injeta dependências
    public fbStore: AngularFirestore,
    public fbAuth: AngularFireAuth,
  ) {
    this.initializeApp();
  }

  // Quando componente estiver pronto...
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    // 3.4) Lê login no armazenamento local
    this.storage.get('userData', { type: 'string' }).subscribe({
      next: ((uData) => {

        // Se esta logago
        if (uData) {

          // Atualiza view
          this.userData = JSON.parse(uData);

          // 10.2) Testa se tem perfil (true ou false)
          this.storage.get('userProfile', { type: 'string' }).subscribe(
            (sData) => {
              this.userProfile = sData;
            }
          );

          // 18.4) Conta mensagens não lidas da caixa de entrada
          this.fbAuth.currentUser.then(() => {
            this.fbStore.collection(
              `messages/${this.userData.uid}/inbox`,
              ref => ref.where('status', '==', 'Não lida')
            ).valueChanges().subscribe((fbData) => {
              this.totalItems = fbData.length;

              // 18.5) Exporta total de mensagens não lidas da caixa de entrada
              this.events.publish('totalItems', this.totalItems);
            });
          });
        }
      })
    });

    // 3.5) Altera dados do usuário sem recarga do script (assíncrono)
    this.events.subscribe('userData', (uData: any) => {
      this.userData = uData;
    });

    // 10.1) Altera dados do usuário sem recarga do script (assíncrono)
    this.events.subscribe('userProfile', (pData: any) => {
      this.userProfile = pData;
    });
  }

  ngOnInit() { }
}
