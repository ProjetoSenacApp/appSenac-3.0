(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-login-login-module"],{

/***/ "CGG8":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.page.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Login / Entrar</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <h2>Olá!</h2>\r\n\r\n    <p>Para que você possa acessar os serviços deste aplicativo, é necessário estar logado(a)...</p>\r\n    <p>Escolha um método de entrada clicando no botão.</p>\r\n\r\n    <div class=\"login-table\">\r\n\r\n      <p>Entrar com:</p>&nbsp;\r\n\r\n      <!-- 3.1) Botões de login com redes sociais -->\r\n\r\n      <ion-button expand=\"block\" (click)=\"login('google')\">\r\n        <ion-icon name=\"logo-google\" slot=\"start\"></ion-icon>\r\n        <ion-label>Google</ion-label>\r\n      </ion-button>\r\n\r\n      <!-- 16.1) Bloqueando botões ainda sem uso -->\r\n      <ion-button class=\"ion-margin-top\" expand=\"block\" (click)=\"login('facebook')\" disabled=\"true\">\r\n        <ion-icon name=\"logo-facebook\" slot=\"start\"></ion-icon>\r\n        <ion-label>Facebook</ion-label>\r\n      </ion-button>\r\n\r\n      <ion-button class=\"ion-margin-top\" expand=\"block\" (click)=\"login('twitter')\" disabled=\"true\">\r\n        <ion-icon name=\"logo-twitter\" slot=\"start\"></ion-icon>\r\n        <ion-label>Twitter</ion-label>\r\n      </ion-button>\r\n\r\n      <ion-button class=\"ion-margin-top\" expand=\"block\" (click)=\"login('github')\" disabled=\"true\">\r\n        <ion-icon name=\"logo-github\" slot=\"start\"></ion-icon>\r\n        <ion-label>GitHub</ion-label>\r\n      </ion-button>\r\n\r\n      <!-- ... -->\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "EhU7":
/*!********************************************!*\
  !*** ./src/app/user/login/login.module.ts ***!
  \********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "SUi3");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "qlbk");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "OaWH":
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "8YY3");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/**
 * Serviços de uso geral
 *    Aqui estão alguns serviços usados em toda ou parte do aplicativo
 * @author Por Luferat
 */


// 3.1) Importa dependências
 // Roteamento
 // Caixa de alerta
// 4.1) Importa dependências
 // Armazenamento local
// 13.1) Importa dependências

let AppService = class AppService {
    constructor(
    // 3.2) Injeção das dependências
    router, // Roteamento
    alertController, // Caixa de alerta
    // 4.2) Injeção das dependências
    storage, // Armazenamento local
    // 13.2) Injeção das dependências
    fbStore) {
        this.router = router;
        this.alertController = alertController;
        this.storage = storage;
        this.fbStore = fbStore;
    }
    // 3.3) Caixa de alerta para feedback (https://ionicframework.com/docs/api/alert)
    myAlert(title, text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: text,
                buttons: [{
                        text: 'Ok',
                        handler: () => true
                    }]
            });
            yield alert.present();
        });
    }
    // 4.3) Método que detecta a presença do perfil local
    isProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Constrói a promise
            return new Promise((resolve, reject) => {
                // Lê o armazenamento local
                this.storage.get('userProfile', { type: 'string' }).subscribe({
                    next: (data) => {
                        // Se perfil, retorna 'true'
                        if (data) {
                            resolve(true);
                        }
                        // Se não tem perfil, retorna 'false'
                        else {
                            resolve(false);
                        }
                    },
                    // Em caso de erro ao tentar acessar 'storage'
                    error: (error) => console.error(error)
                });
            });
        });
    }
    // 13.3) Apaga uma mensagem da caixa de mensagens
    msgDelete(userId, msgBox, msgId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // 14.1) Exibe a caixa de alerta e de confirmação
            const alert = yield this.alertController.create({
                cssClass: '',
                header: 'Apagar mensagem',
                message: 'Tem certeza que deseja apagar esta mensagem? Este processo é irreversível!',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => false
                    }, {
                        text: 'Apagar',
                        handler: () => {
                            // Localize a caixa correta e apaga a mensagem
                            this.fbStore.collection(`messages/${userId}/${msgBox}`).doc(msgId).update({ status: 'Apagada' })
                                // Se a mensagem foi apagada, retorna para a listagem da caixa
                                .then(() => { this.router.navigate([`/msg/${msgBox}`]); })
                                // Se deu erro, exibe
                                .catch(error => { console.log(error); });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
AppService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__["StorageMap"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
];
AppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AppService);



/***/ }),

/***/ "SUi3":
/*!****************************************************!*\
  !*** ./src/app/user/login/login-routing.module.ts ***!
  \****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "qlbk");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "qlbk":
/*!******************************************!*\
  !*** ./src/app/user/login/login.page.ts ***!
  \******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "CGG8");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "rCyR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "8YY3");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/app.service */ "OaWH");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/events.service */ "riPR");




// 3.1) Importa dependências
 // Autenticação
 // Firebase CLI
 // Armazenamento local
 // Firestore
 // Roteamento
 // Serviços de uso geral
 // Dispara eventos globais
let LoginPage = class LoginPage {
    constructor(
    // 3.3) Injeção de dependências
    fbAuth, // Autenticação
    fbStore, // Firestore
    storage, // Armazenamento local
    app, // Serviços de uso geral
    router, // Roteamento
    events) {
        this.fbAuth = fbAuth;
        this.fbStore = fbStore;
        this.storage = storage;
        this.app = app;
        this.router = router;
        this.events = events;
    }
    ngOnInit() { }
    // 3.4) Ação do botão de login
    login(provider) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Seleção do provedor de login social
            // - Adicione outros provedores conforme a configuração do Firebase Authentication
            switch (provider) {
                case 'google':
                    this.authProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].GoogleAuthProvider();
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
                                        this.app.myAlert(`Olá ${this.userData.displayName}`, `Você já pode acessar todos os recursos do aplicativo.`);
                                        // Vai para a raiz
                                        this.router.navigate(['/']);
                                    },
                                    error: (error) => { console.error(error); }
                                });
                                // Se não tem perfil
                            }
                            else {
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
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] },
    { type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_6__["StorageMap"] },
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_9__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_10__["EventsService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "rCyR":
/*!********************************************!*\
  !*** ./src/app/user/login/login.page.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/* 3.1) Formata lista de botões */\n.login-table {\n  display: table;\n  margin: auto;\n  width: 220px;\n}\n.login-table ion-label {\n  padding-left: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCLGlDQUFBO0FBQ0E7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFFSjtBQUNBO0VBQ0ksb0JBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogMy4xKSBGb3JtYXRhIGxpc3RhIGRlIGJvdMO1ZXMgKi9cbi5sb2dpbi10YWJsZSB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAyMjBweDtcbn1cblxuLmxvZ2luLXRhYmxlIGlvbi1sYWJlbCB7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=user-login-login-module-es2015.js.map