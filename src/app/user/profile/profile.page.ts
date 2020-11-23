import { Component, OnInit } from '@angular/core';

// 4.1) Importa dependências
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

// 8.1) Importa dependências
import { StorageMap } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  // 8.2) Variáveis para dados do usuário
  userData: any;
  userProfile: any;

  constructor(

    // 4.2) Injeta dependências
    public router: Router,
    public app: AppService,

    // 8.3) Injeta dependências
    public storage: StorageMap,
  ) { }

  ngOnInit() { }

  // 4.3) 'ionViewWillEnter' é executado SEMPRE que a página (re)carrega
  //      https://ionicframework.com/blog/navigating-lifecycle-events/
  ionViewWillEnter() {

    // Testa o perfil local
    this.app.isProfile().then(
      (data) => {

        // Se existe, faz as ações da página
        if (data) {

          // 8.4) Obtém dados do login local e armazena em 'userData'
          this.storage.get('userData', { type: 'string' }).subscribe(
            (data) => {
              this.userData = JSON.parse(data);

              // 8.5) Obtém dados do perfil local e armazena em 'userProfile'
              this.storage.get('userProfile', { type: 'string' }).subscribe(
                (data) => {
                  this.userProfile = JSON.parse(data);
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

  // 8.6) Ação do botão para editar perfil do provedor de login
  editProviderProfile() {

    // Variável com URL do perfil, de acordo com o provedor
    var profileURL = '';

    // Seleciona o URL, de acordo com o provedor
    switch (this.userData.provider) {

      case 'google':
        profileURL = 'https://myaccount.google.com/profile';
        break;

      case 'facebook':
        // profileURL = '';
        break;

      case 'twitter':
        // profileURL = '';
        break;

      case 'github':
        // profileURL = '';
        break;

      // case ....
    }

    // Aviso de redirecionamento
    if (this.app.myAlert(this.userData.displayName, `Atenção! Você será redirecionado para a página de perfil no provedor`)) {

      // Redireciona para o perfil do usuário no provedor
      window.open(profileURL);
    }
  }
}