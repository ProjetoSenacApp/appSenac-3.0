(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-logout-logout-module"],{

/***/ "CodS":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/logout/logout.page.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Logout / Sair</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <!-- 3.1) Mostra botão de logout -->\r\n  <div class=\"ion-padding\">\r\n\r\n    <h2>Olá!</h2>\r\n    <p class=\"ion-text-justify\">Clique no botão abaixo para confirmar a saída do aplicativo.</p>\r\n    <p>&nbsp;</p>\r\n    <p class=\"ion-text-center\">\r\n      <ion-button (click)=\"logout()\">Sair do Aplicativo</ion-button>\r\n    </p>\r\n\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "Mr9J":
/*!**********************************************!*\
  !*** ./src/app/user/logout/logout.page.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9nb3V0L2xvZ291dC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "WD/e":
/*!********************************************!*\
  !*** ./src/app/user/logout/logout.page.ts ***!
  \********************************************/
/*! exports provided: LogoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutPage", function() { return LogoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_logout_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./logout.page.html */ "CodS");
/* harmony import */ var _logout_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logout.page.scss */ "Mr9J");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "8YY3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/events.service */ "riPR");




// 3.1) Importa dependências
 // Autenticação
 // Armazenamento local
 // Roteamento
 // Dispara eventos globais
let LogoutPage = class LogoutPage {
    constructor(
    // 3.2) injeção de dependências
    fbAuth, // Autenticação
    storage, // Armazenamento local
    router, // Roteamento
    events) {
        this.fbAuth = fbAuth;
        this.storage = storage;
        this.router = router;
        this.events = events;
    }
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
};
LogoutPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_5__["StorageMap"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_7__["EventsService"] }
];
LogoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-logout',
        template: _raw_loader_logout_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_logout_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LogoutPage);



/***/ }),

/***/ "fsJ+":
/*!**********************************************!*\
  !*** ./src/app/user/logout/logout.module.ts ***!
  \**********************************************/
/*! exports provided: LogoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutPageModule", function() { return LogoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _logout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logout-routing.module */ "iUE2");
/* harmony import */ var _logout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logout.page */ "WD/e");







let LogoutPageModule = class LogoutPageModule {
};
LogoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _logout_routing_module__WEBPACK_IMPORTED_MODULE_5__["LogoutPageRoutingModule"]
        ],
        declarations: [_logout_page__WEBPACK_IMPORTED_MODULE_6__["LogoutPage"]]
    })
], LogoutPageModule);



/***/ }),

/***/ "iUE2":
/*!******************************************************!*\
  !*** ./src/app/user/logout/logout-routing.module.ts ***!
  \******************************************************/
/*! exports provided: LogoutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutPageRoutingModule", function() { return LogoutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _logout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logout.page */ "WD/e");




const routes = [
    {
        path: '',
        component: _logout_page__WEBPACK_IMPORTED_MODULE_3__["LogoutPage"]
    }
];
let LogoutPageRoutingModule = class LogoutPageRoutingModule {
};
LogoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LogoutPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=user-logout-logout-module-es2015.js.map