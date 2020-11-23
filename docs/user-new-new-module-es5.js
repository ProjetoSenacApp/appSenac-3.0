(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-new-new-module"], {
    /***/
    "55Cg":
    /*!**************************************!*\
      !*** ./src/app/user/new/new.page.ts ***!
      \**************************************/

    /*! exports provided: NewPage */

    /***/
    function Cg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewPage", function () {
        return NewPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_new_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./new.page.html */
      "BDVB");
      /* harmony import */


      var _new_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./new.page.scss */
      "vSwh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/app.service */
      "OaWH");
      /* harmony import */


      var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-pwa/local-storage */
      "8YY3"); // 4.1) Importa dependências 


      var NewPage = /*#__PURE__*/function () {
        function NewPage( // 4.3) Injeta dependências
        app, storage) {
          _classCallCheck(this, NewPage);

          this.app = app;
          this.storage = storage;
        }

        _createClass(NewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // 4.4) Obtém dados do usuário logado
            this.storage.get('userData', {
              type: 'string'
            }).subscribe(function (data) {
              _this.userData = JSON.parse(data); // 6.1) Comentar exibição da caixa de alerta
              // // 4.5) Exibe caixa de alerta
              // this.app.myAlert(
              //   `Olá ${this.userData.displayName}`,
              //   `Você precisa completar seu cadastro para usar todos os recursos do aplicativo.`
              // );
            });
          }
        }]);

        return NewPage;
      }();

      NewPage.ctorParameters = function () {
        return [{
          type: _services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]
        }, {
          type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_5__["StorageMap"]
        }];
      };

      NewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-new',
        template: _raw_loader_new_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NewPage);
      /***/
    },

    /***/
    "BDVB":
    /*!******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/new/new.page.html ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function BDVB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <!-- 4.1) <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons> -->\r\n\r\n    <!-- 4.2) Botão para voltar para a raiz -->\r\n    <ion-button slot=\"start\" routerLink=\"/\" fill=\"clear\">\r\n      <ion-icon name=\"chevron-back-outline\"></ion-icon>\r\n    </ion-button>\r\n\r\n    <ion-title>Cadastro de Perfil</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <!-- 5.1) Inclui seletor do componente do formulário de perfil -->\r\n    <app-profile></app-profile>\r\n\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "Js6N":
    /*!****************************************!*\
      !*** ./src/app/user/new/new.module.ts ***!
      \****************************************/

    /*! exports provided: NewPageModule */

    /***/
    function Js6N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewPageModule", function () {
        return NewPageModule;
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


      var _new_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./new-routing.module */
      "XtG9");
      /* harmony import */


      var _new_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./new.page */
      "55Cg");
      /* harmony import */


      var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/profile/profile.component */
      "DZ0t"); // 5.1) Importa dependências


      var NewPageModule = function NewPageModule() {
        _classCallCheck(this, NewPageModule);
      };

      NewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _new_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewPageRoutingModule"], // 5.2) Injeta dependências
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_new_page__WEBPACK_IMPORTED_MODULE_6__["NewPage"], // 5.3) Declara componente importado
        _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]]
      })], NewPageModule);
      /***/
    },

    /***/
    "XtG9":
    /*!************************************************!*\
      !*** ./src/app/user/new/new-routing.module.ts ***!
      \************************************************/

    /*! exports provided: NewPageRoutingModule */

    /***/
    function XtG9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewPageRoutingModule", function () {
        return NewPageRoutingModule;
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


      var _new_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./new.page */
      "55Cg");

      var routes = [{
        path: '',
        component: _new_page__WEBPACK_IMPORTED_MODULE_3__["NewPage"]
      }];

      var NewPageRoutingModule = function NewPageRoutingModule() {
        _classCallCheck(this, NewPageRoutingModule);
      };

      NewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewPageRoutingModule);
      /***/
    },

    /***/
    "vSwh":
    /*!****************************************!*\
      !*** ./src/app/user/new/new.page.scss ***!
      \****************************************/

    /*! exports provided: default */

    /***/
    function vSwh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbmV3L25ldy5wYWdlLnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-new-new-module-es5.js.map