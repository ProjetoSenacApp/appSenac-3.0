import { Component, OnInit } from '@angular/core';

// 3.1) Importa dependências
import { AngularFireAuth } from '@angular/fire/auth'; // Autenticação
import { StorageMap } from '@ngx-pwa/local-storage'; // Armazenamento local
import { Router } from '@angular/router'; // Roteamento
import { EventsService } from '../../services/events.service'; // Dispara eventos globais

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(

    // 3.2) injeção de dependências
    public fbAuth: AngularFireAuth, // Autenticação
    private storage: StorageMap, // Armazenamento local
    private router: Router, // Roteamento
    public events: EventsService, // Dispara eventos globais
  ) { }

  ngOnInit() { }

  // 3.3) Ação do botão [Sair]
  logout() {

    // Lougout no Firebase Auth
    this.fbAuth.signOut()
      .then(() => {

        // Apaga perfil local
        this.storage.delete('userProfile').subscribe({
          next: (() => {

            // Apaga login local
            this.storage.delete('userData').subscribe({
              next: (() => {

                // 3.4) Atualiza 'userData' no menu principal também (app.component.ts)
                this.events.publish('userData', null);

                // 10.1) Atualiza 'userProfile' globalmente
                this.events.publish('userProfile', null);

                // Rota para a página inicial
                this.router.navigate(['/']);
              }),
              error: ((error) => { console.error(error); })
            });
          }),
          error: ((error) => { console.error(error); })
        });
      })
      .catch((error) => { console.error(error); });
  }
}
