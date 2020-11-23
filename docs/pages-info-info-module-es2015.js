(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-info-info-module"],{

/***/ "MhQo":
/*!*******************************************!*\
  !*** ./src/app/pages/info/info.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZm8vaW5mby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "ZFnD":
/*!***************************************************!*\
  !*** ./src/app/pages/info/info-routing.module.ts ***!
  \***************************************************/
/*! exports provided: InfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageRoutingModule", function() { return InfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info.page */ "vFw5");




const routes = [
    {
        path: '',
        component: _info_page__WEBPACK_IMPORTED_MODULE_3__["InfoPage"]
    }
];
let InfoPageRoutingModule = class InfoPageRoutingModule {
};
InfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InfoPageRoutingModule);



/***/ }),

/***/ "hico":
/*!*******************************************!*\
  !*** ./src/app/pages/info/info.module.ts ***!
  \*******************************************/
/*! exports provided: InfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageModule", function() { return InfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-routing.module */ "ZFnD");
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info.page */ "vFw5");







let InfoPageModule = class InfoPageModule {
};
InfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _info_routing_module__WEBPACK_IMPORTED_MODULE_5__["InfoPageRoutingModule"]
        ],
        declarations: [_info_page__WEBPACK_IMPORTED_MODULE_6__["InfoPage"]]
    })
], InfoPageModule);



/***/ }),

/***/ "sUEW":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/info/info.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Informações</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <h3>Sobre este aplicativo</h3>\r\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequatur expedita quos deleniti, mollitia vel!\r\n      Facere, doloribus quisquam? Necessitatibus explicabo natus provident consequatur exercitationem quasi dolorum\r\n      magni non est error.</p>\r\n\r\n    <h3>Sobre o autor</h3>\r\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsum rerum dolorem, fugiat itaque, accusamus\r\n      aut illo quis, libero ipsam ad veritatis eum quae! Modi accusamus earum facere dicta totam.</p>\r\n\r\n    <h3>Sobre sua privacidade</h3>\r\n    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis soluta consequatur libero recusandae placeat\r\n      veniam blanditiis repellat sint labore dignissimos, quaerat enim ab, quas laboriosam laborum, molestiae corporis\r\n      pariatur ad!</p>\r\n\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "vFw5":
/*!*****************************************!*\
  !*** ./src/app/pages/info/info.page.ts ***!
  \*****************************************/
/*! exports provided: InfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPage", function() { return InfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_info_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./info.page.html */ "sUEW");
/* harmony import */ var _info_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info.page.scss */ "MhQo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let InfoPage = class InfoPage {
    constructor() { }
    ngOnInit() {
    }
};
InfoPage.ctorParameters = () => [];
InfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-info',
        template: _raw_loader_info_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_info_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InfoPage);



/***/ })

}]);
//# sourceMappingURL=pages-info-info-module-es2015.js.map