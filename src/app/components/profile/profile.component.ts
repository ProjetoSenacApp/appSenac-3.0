import { Component, OnInit } from '@angular/core';
 
// 5.1) Importa dependências
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

// 5.8) Importa dependências
import { StorageMap } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';

// 6.2) Importa dependências
import { AngularFirestore } from '@angular/fire/firestore';

// 7.1) Importa dependências
import { AppService } from '../../services/app.service'; // Serviços de uso geral

// 10.1) Importa dependências
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  // 5.2) Cria formulário
  public profileForm: FormGroup;

  // 5.9) Variável com dados do usuário logado
  userData: any;

  // 6.3) Variável com a lista "select01"
  // 9.1) Variável com a lista "select01" (Ajuste no  nome da variável)
  selectDynamic: any;

  // 9.2) Variável com perfil do usuário
  userProfile: any;

  // 9.3) Textos da View
  paragraph = `Você precisa cadastrar seu perfil para ter acesso aos recursos do aplicativo de forma pesonalizada.`;
  btnText = `Cadastrar perfil`;
  redirectPage = `/`;

  constructor(

    // 5.3) Injeta dependências
    private formBuilder: FormBuilder,

    // 5.10) Injeta dependências
    public storage: StorageMap,
    public router: Router,

    // 6.4) Injeta dependências
    public fbStore: AngularFirestore,

    // 7.2) Injeta dependências
    public app: AppService,

    // 10.2) Injeta dependências
    public events: EventsService,
  ) {

    // 5.11) Obtém dados do usuário logado
    this.storage.get('userData', { type: 'string' }).subscribe((data) => {

      // 5.12) Se não logou, vai para a raiz
      if (!data) { this.router.navigate(['/']); }

      // 5.13) Dados do usuário logado
      this.userData = JSON.parse(data);

      // 5.4) Cria formulário
      this.profileFormCreate();

      // 6.5) Obtém lista "select01" do Firestore de forma assíncrona
      // 9.4) Obtém lista "select01" do Firestore de forma assíncrona (Ajuste no  nome da variável)
      this.fbStore.collection('select01', ref => ref.orderBy('option')).valueChanges().subscribe(
        (uData) => {
          this.selectDynamic = uData;

          // 9.5) Preenche o campo automaticamente com dados do perfil se estiver editando
          if (this.selectDynamic && this.userProfile) {
            this.profileForm.controls.selectDynamic.setValue(this.userProfile.selectDynamic);
          }
        }
      );
    });
  }

  ngOnInit() { }

  // 5.6) Define campos do formulário e validações
  async profileFormCreate() {

    this.profileForm = this.formBuilder.group({

      id: [

        // 5.14) Preenche o uid do perfil em 'id'
        this.userData.uid
      ],

      name: [

        // 9.6) Valor inicial do campo
        null,

        // 5.15) Preenche o nome do perfil em 'name'
        // this.userData.displayName,
        Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])
      ],
      birth: [
        null,
        Validators.compose([
          Validators.required,
          this.over14Years
        ])
      ],
      cpf: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(/^\b\d{11}\b/g)
        ])
      ],

      // 6.7) Cria campo tipo 'radio'
      gender: [
        null,

        // 6.8) Validando campo
        Validators.compose([
          Validators.required
        ])
      ],

      email: [

        // 5.16) Preenche o email do perfil em 'email'
        // 9.7) Valor inicial do campo
        null,
        Validators.compose([
          Validators.required,
          Validators.email
        ])
      ],
      homePhone: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(/^\(?[1-9]{2}\)? ?(?:[2-8]|8[1-9])[0-9]{3}\-?[0-9]{4}$/)
        ])
      ],
      cellPhone: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/)
        ])
      ],
      whatsApp: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/)
        ])
      ],

      // 6.1) Cria campo tipo 'select'
      selectStatic: [
        null,

        // 6.9) Validando campo
        Validators.compose([
          Validators.required
        ])
      ],

      // 6.6) Cria campo tipo 'select'
      selectDynamic: [
        null,

        // 6.10) Validando campo
        Validators.compose([
          Validators.required
        ])
      ],

      type: ['usuário'],
      status: ['ativo']

    });
  }

  // 5.6) Método que trata envio do formulário
  profileSubmit() {
    // console.log(this.profileForm.value);

    // 7.3) Se formulário é inválido, sai sem fazer nada
    if (this.profileForm.invalid) { return false; }

    // 7.4) Salva no Firestore
    this.fbStore.collection('users').doc(this.userData.uid).set(this.profileForm.value)
      .then((docRef) => {

        // 7.5) Salva no armazenamento local
        this.storage.set('userProfile', JSON.stringify(this.profileForm.value)).subscribe(
          () => {

            // 10.3) Atualiza 'user*' no menu principal (app.component.ts)
            this.events.publish('userData', this.userData);
            this.events.publish('userProfile', this.userData);

            // 7.6) Feedback 'sucesso'
            this.app.myAlert(this.userData.displayName, `Seu perfil foi cadastrado com sucesso!`);

            // 7.7) Limpa o formulário
            this.profileForm.reset();

            // 7.8) Vai para a raiz
            this.router.navigate([this.redirectPage]);
          }
        );
      })
      .catch(

        // 7.9) Tratamento de erros
        (error) => {
          console.error(error);
          this.app.myAlert(this.userData.displayName, `Ocorreu um erro ao cadastrar seu perfil. Por favor, tente mais tarde.`);
        }
      );
  }

  // 5.7) Método que valida data de nascimento
  over14Years(control: AbstractControl) {
    const birth = control.value;
    if (birth) {
      const [year, month, day] = birth.split('-');
      const today = new Date();
      const dateBirth = new Date(year, month, day, 0, 0, 0);
      const timeToTest = 1000 * 60 * 60 * 24 * 365 * 14; // 14 anos em milissegundos...
      if (today.getTime() - dateBirth.getTime() >= timeToTest) { return null; }
    }
    return { under14years: true };
  }

  // 9.8) Preenche campos do form, mas só quando a View estiver pronta
  ngAfterViewInit() {

    // Obtém dados do perfil do armazenamento local
    this.storage.get('userProfile', { type: 'string' }).subscribe(
      (data) => {

        // Se existem dados, é porque vai editar perfil
        if (data) {

          // Obtém dados
          this.userProfile = JSON.parse(data);

          // Atualiza campos do form com dados do perfil
          this.profileForm.controls.name.setValue(this.userProfile.name);
          this.profileForm.controls.birth.setValue(this.userProfile.birth);
          this.profileForm.controls.cpf.setValue(this.userProfile.cpf);
          this.profileForm.controls.gender.setValue(this.userProfile.gender);
          this.profileForm.controls.email.setValue(this.userProfile.email);
          this.profileForm.controls.homePhone.setValue(this.userProfile.homePhone);
          this.profileForm.controls.cellPhone.setValue(this.userProfile.cellPhone);
          this.profileForm.controls.whatsApp.setValue(this.userProfile.whatsApp);
          this.profileForm.controls.selectStatic.setValue(this.userProfile.selectStatic);
          this.profileForm.controls.type.setValue(this.userProfile.type);
          this.profileForm.controls.status.setValue(this.userProfile.status);

          // OBS: Campos dinâmicos devem ser pré-preenchidos na carga de seus valores (veja 9.4)

          // Atualiza a View
          this.paragraph = `Altere os campos abaixo com atenção, para editar seu perfil.`;
          this.btnText = `Salvar perfil`;
          this.redirectPage = `/user/profile`;

          // Se não existem dado de perfil, é um novo perfil
        } else {

          // Preenche campos com valor do login
          this.profileForm.controls.name.setValue(this.userData.displayName);
          this.profileForm.controls.email.setValue(this.userData.email);
        }
      }
    );
  }
}
