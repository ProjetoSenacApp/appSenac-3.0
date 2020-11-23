import { Component, OnInit } from '@angular/core';

// 18.1) Importa as dependências
import { AppService } from 'src/app/services/app.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { StorageMap } from '@ngx-pwa/local-storage';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-msg-menu',
  templateUrl: './msg-menu.component.html',
  styleUrls: ['./msg-menu.component.scss'],
})
export class MsgMenuComponent implements OnInit {

  // 18.3) Atributos
  totalItems: any; // Total de mensagens não lidas
  userData: any;

  constructor(

    // 18.2) Injeta dependências
    public app: AppService,
    public fbStore: AngularFirestore,
    public storage: StorageMap,
    public events: EventsService,
  ) { }

  ngOnInit() {

    // 18.4) Conta as mensagens não lidas da caixa de entrada
    this.events.subscribe('totalItems', (tData: any) => { this.totalItems = tData; });
    this.storage.get('userData', { type: 'string' }).subscribe(
      (uData) => {
        this.userData = JSON.parse(uData);
        this.fbStore.collection(
          `messages/${this.userData.uid}/inbox`,
          ref => ref.where('status', '==', 'Não lida')
        ).valueChanges().subscribe((fbData) => {
          this.totalItems = fbData.length;

          // 18.5) Exporta total de mensagens não lidas da caixa de entrada
          this.events.publish('totalItems', this.totalItems);
        });

      }
    );
  }
}
