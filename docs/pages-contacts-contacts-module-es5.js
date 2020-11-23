(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contacts-contacts-module"], {
    /***/
    "EWb5":
    /*!***************************************************!*\
      !*** ./src/app/pages/contacts/contacts.module.ts ***!
      \***************************************************/

    /*! exports provided: ContactsPageModule */

    /***/
    function EWb5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactsPageModule", function () {
        return ContactsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./contacts-routing.module */
      "rUYa");
      /* harmony import */


      var _contacts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./contacts.page */
      "Tett");

      var ContactsPageModule = function ContactsPageModule() {
        _classCallCheck(this, ContactsPageModule);
      };

      ContactsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactsPageRoutingModule"]],
        declarations: [_contacts_page__WEBPACK_IMPORTED_MODULE_6__["ContactsPage"]]
      })], ContactsPageModule);
      /***/
    },

    /***/
    "O6Z6":
    /*!***************************************************!*\
      !*** ./src/app/pages/contacts/contacts.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function O6Z6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3RzL2NvbnRhY3RzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "Tett":
    /*!*************************************************!*\
      !*** ./src/app/pages/contacts/contacts.page.ts ***!
      \*************************************************/

    /*! exports provided: ContactsPage */

    /***/
    function Tett(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactsPage", function () {
        return ContactsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_contacts_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./contacts.page.html */
      "vIa4");
      /* harmony import */


      var _contacts_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./contacts.page.scss */
      "O6Z6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ContactsPage = /*#__PURE__*/function () {
        function ContactsPage() {
          _classCallCheck(this, ContactsPage);
        }

        _createClass(ContactsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactsPage;
      }();

      ContactsPage.ctorParameters = function () {
        return [];
      };

      ContactsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contacts',
        template: _raw_loader_contacts_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contacts_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ContactsPage);
      /***/
    },

    /***/
    "rUYa":
    /*!***********************************************************!*\
      !*** ./src/app/pages/contacts/contacts-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: ContactsPageRoutingModule */

    /***/
    function rUYa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactsPageRoutingModule", function () {
        return ContactsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _contacts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./contacts.page */
      "Tett");

      var routes = [{
        path: '',
        component: _contacts_page__WEBPACK_IMPORTED_MODULE_3__["ContactsPage"]
      }];

      var ContactsPageRoutingModule = function ContactsPageRoutingModule() {
        _classCallCheck(this, ContactsPageRoutingModule);
      };

      ContactsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ContactsPageRoutingModule);
      /***/
    },

    /***/
    "vIa4":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contacts/contacts.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function vIa4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Faça Contato</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <p>Preencha o formulário abaixo para entrar em contato com a equipe do aplicativo.</p>\r\n\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-contacts-contacts-module-es5.js.map