import { Component, OnInit } from '@angular/core';

// 4.1) Importa dependências
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-test01',
  templateUrl: './test01.page.html',
  styleUrls: ['./test01.page.scss'],
})
export class Test01Page implements OnInit {

  constructor(

    // 4.2) Injeta dependências
    public router: Router,
    public app: AppService,
  ) { }

  ngOnInit() { }

  // 4.3) 'ionViewWillEnter' é executado SEMPRE que a página (re)carrega
  ionViewWillEnter() {

    // Testa o perfil local
    this.app.isProfile().then(
      (data) => {

        // Se existe, faz as ações da página
        if (data) {
          console.log('bla bla bla');

          // Se não existe, vai para o cadastro de perfil
        } else {
          this.router.navigate(['/user/new']);
        }
      });
  }
}
