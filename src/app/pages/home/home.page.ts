import { Component, OnInit } from '@angular/core';

// 3.1) Importa dependências
import { StorageMap } from '@ngx-pwa/local-storage'; // Armazenamento local

// 10.1) Importa dependências
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // 3.2) Dados do login do usuário
  userData: any;

  constructor(

    // 3.3) Injeção de dependências
    private storage: StorageMap, // Armazenamento local

    // 10.2) Injeta dependências
    public events: EventsService,
  ) { }

  ngOnInit() { }

  // 10.3) Quando componente estiver pronto...
  async ionViewDidEnter() {

    // 3.4) Obtém dados do usuário
    // 10.4)  Obtém dados do usuário
    this.storage.get('userData', { type: 'string' }).subscribe(
      (uData) => {
        if (uData) { this.userData = JSON.parse(uData); }
      }
    );

    // 10.5) Altera dados do usuário sem recarga do script (assíncrono)
    this.events.subscribe('userData', (uData: any) => {
      this.userData = uData;
    });
  }
}
