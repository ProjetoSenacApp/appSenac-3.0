(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["msg-outbox-outbox-module"],{

/***/ "NNRy":
/*!*********************************************!*\
  !*** ./src/app/msg/outbox/outbox.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21zZy9vdXRib3gvb3V0Ym94LnBhZ2Uuc2NzcyJ9 */");

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

/***/ "hNGJ":
/*!*********************************************!*\
  !*** ./src/app/msg/outbox/outbox.module.ts ***!
  \*********************************************/
/*! exports provided: OutboxPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutboxPageModule", function() { return OutboxPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _outbox_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./outbox-routing.module */ "j1ep");
/* harmony import */ var _outbox_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./outbox.page */ "xIP6");
/* harmony import */ var _components_msg_menu_msg_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/msg-menu/msg-menu.component */ "7WMo");







// 17.1) Importa dependências

let OutboxPageModule = class OutboxPageModule {
};
OutboxPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _outbox_routing_module__WEBPACK_IMPORTED_MODULE_5__["OutboxPageRoutingModule"]
        ],
        declarations: [
            _outbox_page__WEBPACK_IMPORTED_MODULE_6__["OutboxPage"],
            // 17.2) Declara dependências
            _components_msg_menu_msg_menu_component__WEBPACK_IMPORTED_MODULE_7__["MsgMenuComponent"],
        ]
    })
], OutboxPageModule);



/***/ }),

/***/ "j1ep":
/*!*****************************************************!*\
  !*** ./src/app/msg/outbox/outbox-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: OutboxPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutboxPageRoutingModule", function() { return OutboxPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _outbox_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outbox.page */ "xIP6");




const routes = [
    {
        path: '',
        component: _outbox_page__WEBPACK_IMPORTED_MODULE_3__["OutboxPage"]
    }
];
let OutboxPageRoutingModule = class OutboxPageRoutingModule {
};
OutboxPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OutboxPageRoutingModule);



/***/ }),

/***/ "o2tG":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/msg/outbox/outbox.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <!-- 10.1) Menu e título -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Caixa de Saída</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n\r\n<!-- 17.1) Menu de mensagens -->\r\n<app-msg-menu></app-msg-menu>");

/***/ }),

/***/ "xIP6":
/*!*******************************************!*\
  !*** ./src/app/msg/outbox/outbox.page.ts ***!
  \*******************************************/
/*! exports provided: OutboxPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutboxPage", function() { return OutboxPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_outbox_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./outbox.page.html */ "o2tG");
/* harmony import */ var _outbox_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outbox.page.scss */ "NNRy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "8YY3");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/app.service */ "OaWH");




// 10.1) Importa dependências



let OutboxPage = class OutboxPage {
    constructor(
    // 10.2) Injeta dependências
    router, app, storage) {
        this.router = router;
        this.app = app;
        this.storage = storage;
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
                    });
                });
                // Se não existe perfil, vai para o cadastro de perfil
            }
            else {
                this.router.navigate(['/user/new']);
            }
        });
    }
};
OutboxPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"] },
    { type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_5__["StorageMap"] }
];
OutboxPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-outbox',
        template: _raw_loader_outbox_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_outbox_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OutboxPage);



/***/ })

}]);
//# sourceMappingURL=msg-outbox-outbox-module-es2015.js.map