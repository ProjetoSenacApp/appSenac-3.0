import { Component, OnInit } from '@angular/core';

// 4.1) Importa dependências 
import { AppService } from '../../services/app.service';
import { StorageMap } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {

  // 4.2) Variável com dados do login
  userData: any;
 
  constructor(

    // 4.3) Injeta dependências
    public app: AppService,
    private storage: StorageMap,
  ) { }

  ngOnInit() {

    // 4.4) Obtém dados do usuário logado
    this.storage.get('userData', { type: 'string' }).subscribe(
      (data) => {
        this.userData = JSON.parse(data);

        // 6.1) Comentar exibição da caixa de alerta
        // // 4.5) Exibe caixa de alerta
        // this.app.myAlert(
        //   `Olá ${this.userData.displayName}`,
        //   `Você precisa completar seu cadastro para usar todos os recursos do aplicativo.`
        // );
      }
    );
  }
}
