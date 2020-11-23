(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-edit-edit-module"],{

/***/ "+46m":
/*!**************************************************!*\
  !*** ./src/app/user/edit/edit-routing.module.ts ***!
  \**************************************************/
/*! exports provided: EditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageRoutingModule", function() { return EditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit.page */ "Y5Tb");




const routes = [
    {
        path: '',
        component: _edit_page__WEBPACK_IMPORTED_MODULE_3__["EditPage"]
    }
];
let EditPageRoutingModule = class EditPageRoutingModule {
};
EditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditPageRoutingModule);



/***/ }),

/***/ "26qn":
/*!******************************************!*\
  !*** ./src/app/user/edit/edit.module.ts ***!
  \******************************************/
/*! exports provided: EditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageModule", function() { return EditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-routing.module */ "+46m");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "Y5Tb");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/profile/profile.component */ "DZ0t");







// 9.1) Importa dependências


let EditPageModule = class EditPageModule {
};
EditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditPageRoutingModule"],
            // 9.2) Injeta dependências
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [
            _edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"],
            // 9.3) Declara componente importado
            _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
        ]
    })
], EditPageModule);



/***/ }),

/***/ "XRMI":
/*!******************************************!*\
  !*** ./src/app/user/edit/edit.page.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZWRpdC9lZGl0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "Y5Tb":
/*!****************************************!*\
  !*** ./src/app/user/edit/edit.page.ts ***!
  \****************************************/
/*! exports provided: EditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPage", function() { return EditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit.page.html */ "xlfN");
/* harmony import */ var _edit_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.page.scss */ "XRMI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let EditPage = class EditPage {
    constructor() { }
    ngOnInit() {
    }
};
EditPage.ctorParameters = () => [];
EditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit',
        template: _raw_loader_edit_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditPage);



/***/ }),

/***/ "xlfN":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/edit/edit.page.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <!-- 9.1) Botão do menu e título -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Seu Perfil</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <!-- 9.2) Inclui seletor do componente do formulário de perfil -->\r\n    <app-profile></app-profile>\r\n\r\n  </div>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=user-edit-edit-module-es2015.js.map