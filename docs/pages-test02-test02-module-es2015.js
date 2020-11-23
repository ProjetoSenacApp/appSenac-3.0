(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-test02-test02-module"],{

/***/ "1AvG":
/*!*********************************************!*\
  !*** ./src/app/pages/test02/test02.page.ts ***!
  \*********************************************/
/*! exports provided: Test02Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test02Page", function() { return Test02Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_test02_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./test02.page.html */ "Im4i");
/* harmony import */ var _test02_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test02.page.scss */ "1YP8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Test02Page = class Test02Page {
    constructor() { }
    ngOnInit() { }
};
Test02Page.ctorParameters = () => [];
Test02Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-test02',
        template: _raw_loader_test02_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_test02_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Test02Page);



/***/ }),

/***/ "1YP8":
/*!***********************************************!*\
  !*** ./src/app/pages/test02/test02.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlc3QwMi90ZXN0MDIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "Im4i":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test02/test02.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Teste 02</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde impedit similique quaerat, earum nulla aliquid\r\n      repellat quibusdam quam, veniam perspiciatis obcaecati fugit exercitationem deleniti ipsum magnam. Expedita\r\n      suscipit commodi fugit!</p>\r\n\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "lxIU":
/*!*******************************************************!*\
  !*** ./src/app/pages/test02/test02-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: Test02PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test02PageRoutingModule", function() { return Test02PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _test02_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test02.page */ "1AvG");




const routes = [
    {
        path: '',
        component: _test02_page__WEBPACK_IMPORTED_MODULE_3__["Test02Page"]
    }
];
let Test02PageRoutingModule = class Test02PageRoutingModule {
};
Test02PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Test02PageRoutingModule);



/***/ }),

/***/ "oDcM":
/*!***********************************************!*\
  !*** ./src/app/pages/test02/test02.module.ts ***!
  \***********************************************/
/*! exports provided: Test02PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test02PageModule", function() { return Test02PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _test02_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test02-routing.module */ "lxIU");
/* harmony import */ var _test02_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test02.page */ "1AvG");







let Test02PageModule = class Test02PageModule {
};
Test02PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _test02_routing_module__WEBPACK_IMPORTED_MODULE_5__["Test02PageRoutingModule"]
        ],
        declarations: [_test02_page__WEBPACK_IMPORTED_MODULE_6__["Test02Page"]]
    })
], Test02PageModule);



/***/ })

}]);
//# sourceMappingURL=pages-test02-test02-module-es2015.js.map