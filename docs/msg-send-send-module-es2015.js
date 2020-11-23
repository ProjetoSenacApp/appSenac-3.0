(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["msg-send-send-module"],{

/***/ "CYGl":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/msg/send/send.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <!-- 10.1) Menu e título -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Nova mensagem</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <!-- 17.2) Formulário de envio de mensagem -->\r\n    <div *ngIf=\"sendForm\">\r\n\r\n      <p class=\"ion-text-center\">\r\n        <small>\r\n          <ion-text color=\"danger\">Preencha todos os campos.</ion-text>\r\n        </small>\r\n      </p>\r\n\r\n      <form [formGroup]=\"sendForm\" (ngSubmit)=\"sendSubmit()\">\r\n\r\n        <ion-list lines=\"full\" id=\"profileList\" class=\"ion-no-padding\">\r\n\r\n          <ion-item>\r\n            <ion-label for=\"userTo\" position=\"floating\" color=\"primary\">\r\n              Para:\r\n              <ion-text color=\"danger\" *ngIf=\"sendForm.controls.userTo.errors\">\r\n                <small *ngIf=\"sendForm.controls.userTo.errors.required\">* Obrigatório</small>\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-select id=\"userTo\" name=\"userTo\" formControlName=\"userTo\" placeholder=\"Selecione\"\r\n              interface=\"action-sheet\" ok-text=\"Ok\" cancel-text=\"Cancela\">\r\n              <span *ngFor=\"let user of usersList\">\r\n\r\n                <!-- 18.1) Correção na variável -->\r\n                <ion-select-option *ngIf=\"user.id !== userData.uid\" value=\"{{ user.uid}} \">{{ user.name }}</ion-select-option>\r\n              </span>\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label for=\"subject\" position=\"floating\" color=\"primary\">\r\n              Assunto:\r\n              <ion-text color=\"danger\" *ngIf=\"sendForm.controls.subject.errors\">\r\n                <small *ngIf=\"sendForm.controls.subject.errors.required\">* Obrigatório</small>\r\n                <small *ngIf=\"sendForm.controls.subject.errors.minlength\">* Inválido</small>\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-input type=\"text\" id=\"subject\" name=\"subject\" formControlName=\"subject\"\r\n              placeholder=\"Assunto da mensagem\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label for=\"message\" position=\"floating\" color=\"primary\">\r\n              Mensagem:\r\n              <ion-text color=\"danger\" *ngIf=\"sendForm.controls.message.errors\">\r\n                <small *ngIf=\"sendForm.controls.message.errors.required\">* Obrigatório</small>\r\n                <small *ngIf=\"sendForm.controls.message.errors.minlength\">* Inválido</small>\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-textarea rows=\"1\" type=\"text\" id=\"message\" name=\"message\" formControlName=\"message\"\r\n              placeholder=\"Texto da mensagem\" autoGrow=\"true\"></ion-textarea>\r\n          </ion-item>\r\n\r\n        </ion-list>\r\n\r\n        <ion-button type=\"submit\" expand=\"block\" class=\"ion-margin-vertical\" [disabled]=\"sendForm.invalid\">\r\n          Enviar\r\n        </ion-button>\r\n\r\n      </form>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<!-- 17.1) Menu de mensagens -->\r\n<app-msg-menu></app-msg-menu>");

/***/ }),

/***/ "DNxE":
/*!*****************************************!*\
  !*** ./src/app/msg/send/send.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21zZy9zZW5kL3NlbmQucGFnZS5zY3NzIn0= */");

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

/***/ "eimo":
/*!***************************************!*\
  !*** ./src/app/msg/send/send.page.ts ***!
  \***************************************/
/*! exports provided: SendPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendPage", function() { return SendPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_send_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./send.page.html */ "CYGl");
/* harmony import */ var _send_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./send.page.scss */ "DNxE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "8YY3");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/app.service */ "OaWH");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/events.service */ "riPR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "TEn/");




// 10.1) Importa dependências



// 17.1) Importa dependências



// 18.1) Importa dependências


let SendPage = class SendPage {
    constructor(
    // 10.2) Injeta dependências
    router, app, storage, 
    // 17.2) Injeta dependências
    formBuilder, fbStore, events, 
    // 18.2) Injeta dependências
    alertController) {
        this.router = router;
        this.app = app;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.fbStore = fbStore;
        this.events = events;
        this.alertController = alertController;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]('en_US'); // Use your own locale
    }
    ngOnInit() { }
    // 10.4) Se tem perfil, obtém dados.
    //       Se não tem, vai para "novo perfil"
    ionViewWillEnter() {
        // Testa o perfil local (true e false)
        this.app.isProfile().then((data) => {
            // Se existe, faz as ações da página
            if (data) {
                // Obtém dados do login local e armazena em 'userData'
                this.storage.get('userData', { type: 'string' }).subscribe((uData) => {
                    this.userData = JSON.parse(uData);
                    // Obtém dados do perfil local e armazena em 'userProfile'
                    this.storage.get('userProfile', { type: 'string' }).subscribe((pData) => {
                        this.userProfile = JSON.parse(pData);
                        // 17.4) Obtém lista de destinatários.
                        //  É necessário criar um índice no Cloud Firestore, para isso, acesse o link no console de erro.
                        this.fbStore.collection('users', ref => ref.where('status', '==', 'ativo').orderBy('name')).valueChanges({ idField: 'uid' }).subscribe((usData) => {
                            this.usersList = usData;
                            // 17.5) Cria formulário
                            this.sendFormCreate();
                        });
                    });
                });
                // Se não existe perfil, vai para o cadastro de perfil
            }
            else {
                this.router.navigate(['/user/new']);
            }
        });
    }
    // 17.6) Cria formulário ReactiveFormsModule
    sendFormCreate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sendForm = this.formBuilder.group({
                userTo: [
                    null,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])
                ],
                subject: [
                    null,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)
                    ])
                ],
                message: [
                    null,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(5)
                    ])
                ]
            });
        });
    }
    // 17.7) Processa envio da mensagem
    sendSubmit() {
        // 18.4) Formata mensagem para database
        this.msgSend = {
            from: this.userData.uid.trim(),
            to: this.sendForm.value.userTo.trim(),
            date: this.pipe.transform(Date.now(), 'yyyy-MM-dd hh:mm:ss').trim(),
            subject: this.sendForm.value.subject.trim(),
            message: this.sendForm.value.message.trim(),
            status: 'Não lida'
        };
        // 18.5) Salva mensagem na caixa de entrada do destinatário
        this.fbStore.collection(`messages/${this.msgSend.to}/inbox`).add(this.msgSend)
            .then((docRef) => {
            // 18.6) Altera status da mensagem
            this.msgSend.status = 'Enviada';
            // 18.7) Salva mensagem na caixa de saída do remetente
            this.fbStore.collection(`messages/${this.msgSend.from}/outbox`).doc(docRef.id).set(this.msgSend)
                .then(() => {
                // 18.8) Feedback
                this.presentAlertConfirm();
            });
        });
    }
    // 18.9) Feedback
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Mensagem enviada',
                message: 'Sua mensagem foi enviada com sucesso!<br><br>Clique em [Ok] para voltar à caixa de entrada.',
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => { this.router.navigate(['/msg/inbox']); }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
SendPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"] },
    { type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_5__["StorageMap"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] },
    { type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_9__["EventsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["AlertController"] }
];
SendPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-send',
        template: _raw_loader_send_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_send_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SendPage);



/***/ }),

/***/ "otXA":
/*!*************************************************!*\
  !*** ./src/app/msg/send/send-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SendPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendPageRoutingModule", function() { return SendPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _send_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./send.page */ "eimo");




const routes = [
    {
        path: '',
        component: _send_page__WEBPACK_IMPORTED_MODULE_3__["SendPage"]
    }
];
let SendPageRoutingModule = class SendPageRoutingModule {
};
SendPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SendPageRoutingModule);



/***/ }),

/***/ "oy9T":
/*!*****************************************!*\
  !*** ./src/app/msg/send/send.module.ts ***!
  \*****************************************/
/*! exports provided: SendPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendPageModule", function() { return SendPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _send_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./send-routing.module */ "otXA");
/* harmony import */ var _send_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send.page */ "eimo");
/* harmony import */ var src_app_components_msg_menu_msg_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/msg-menu/msg-menu.component */ "7WMo");







// 17.1) Importa dependências

// 17.3) Importa dependências

let SendPageModule = class SendPageModule {
};
SendPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _send_routing_module__WEBPACK_IMPORTED_MODULE_5__["SendPageRoutingModule"],
            // 17.4) Injeta dependências
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [
            _send_page__WEBPACK_IMPORTED_MODULE_6__["SendPage"],
            // 17.2) Declara dependências
            src_app_components_msg_menu_msg_menu_component__WEBPACK_IMPORTED_MODULE_7__["MsgMenuComponent"],
        ]
    })
], SendPageModule);



/***/ })

}]);
//# sourceMappingURL=msg-send-send-module-es2015.js.map