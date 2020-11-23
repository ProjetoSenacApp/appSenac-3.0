(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-test01-test01-module"], {
    /***/
    "1qa2":
    /*!***********************************************!*\
      !*** ./src/app/pages/test01/test01.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function qa2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlc3QwMS90ZXN0MDEucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "Bz2o":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test01/test01.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function Bz2o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Teste 01</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde impedit similique quaerat, earum nulla aliquid\r\n      repellat quibusdam quam, veniam perspiciatis obcaecati fugit exercitationem deleniti ipsum magnam. Expedita\r\n      suscipit commodi fugit!</p>\r\n\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "OaWH":
    /*!*****************************************!*\
      !*** ./src/app/services/app.service.ts ***!
      \*****************************************/

    /*! exports provided: AppService */

    /***/
    function OaWH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppService", function () {
        return AppService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-pwa/local-storage */
      "8YY3");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
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


      var AppService = /*#__PURE__*/function () {
        function AppService( // 3.2) Injeção das dependências
        router, // Roteamento
        alertController, // Caixa de alerta
        // 4.2) Injeção das dependências
        storage, // Armazenamento local
        // 13.2) Injeção das dependências
        fbStore) {
          _classCallCheck(this, AppService);

          this.router = router;
          this.alertController = alertController;
          this.storage = storage;
          this.fbStore = fbStore;
        } // 3.3) Caixa de alerta para feedback (https://ionicframework.com/docs/api/alert)


        _createClass(AppService, [{
          key: "myAlert",
          value: function myAlert(title, text) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: title,
                        message: text,
                        buttons: [{
                          text: 'Ok',
                          handler: function handler() {
                            return true;
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // 4.3) Método que detecta a presença do perfil local

        }, {
          key: "isProfile",
          value: function isProfile() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      return _context2.abrupt("return", new Promise(function (resolve, reject) {
                        // Lê o armazenamento local
                        _this.storage.get('userProfile', {
                          type: 'string'
                        }).subscribe({
                          next: function next(data) {
                            // Se perfil, retorna 'true'
                            if (data) {
                              resolve(true);
                            } // Se não tem perfil, retorna 'false'
                            else {
                                resolve(false);
                              }
                          },
                          // Em caso de erro ao tentar acessar 'storage'
                          error: function error(_error) {
                            return console.error(_error);
                          }
                        });
                      }));

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          } // 13.3) Apaga uma mensagem da caixa de mensagens

        }, {
          key: "msgDelete",
          value: function msgDelete(userId, msgBox, msgId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        cssClass: '',
                        header: 'Apagar mensagem',
                        message: 'Tem certeza que deseja apagar esta mensagem? Este processo é irreversível!',
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            return false;
                          }
                        }, {
                          text: 'Apagar',
                          handler: function handler() {
                            // Localize a caixa correta e apaga a mensagem
                            _this2.fbStore.collection("messages/".concat(userId, "/").concat(msgBox)).doc(msgId).update({
                              status: 'Apagada'
                            }) // Se a mensagem foi apagada, retorna para a listagem da caixa
                            .then(function () {
                              _this2.router.navigate(["/msg/".concat(msgBox)]);
                            }) // Se deu erro, exibe
                            ["catch"](function (error) {
                              console.log(error);
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return AppService;
      }();

      AppService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__["StorageMap"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
        }];
      };

      AppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AppService);
      /***/
    },

    /***/
    "Q/KU":
    /*!*********************************************!*\
      !*** ./src/app/pages/test01/test01.page.ts ***!
      \*********************************************/

    /*! exports provided: Test01Page */

    /***/
    function QKU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Test01Page", function () {
        return Test01Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_test01_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./test01.page.html */
      "Bz2o");
      /* harmony import */


      var _test01_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./test01.page.scss */
      "1qa2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/app.service */
      "OaWH"); // 4.1) Importa dependências


      var Test01Page = /*#__PURE__*/function () {
        function Test01Page( // 4.2) Injeta dependências
        router, app) {
          _classCallCheck(this, Test01Page);

          this.router = router;
          this.app = app;
        }

        _createClass(Test01Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // 4.3) 'ionViewWillEnter' é executado SEMPRE que a página (re)carrega

        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this3 = this;

            // Testa o perfil local
            this.app.isProfile().then(function (data) {
              // Se existe, faz as ações da página
              if (data) {
                console.log('bla bla bla'); // Se não existe, vai para o cadastro de perfil
              } else {
                _this3.router.navigate(['/user/new']);
              }
            });
          }
        }]);

        return Test01Page;
      }();

      Test01Page.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]
        }];
      };

      Test01Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-test01',
        template: _raw_loader_test01_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_test01_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Test01Page);
      /***/
    },

    /***/
    "b4wI":
    /*!*******************************************************!*\
      !*** ./src/app/pages/test01/test01-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: Test01PageRoutingModule */

    /***/
    function b4wI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Test01PageRoutingModule", function () {
        return Test01PageRoutingModule;
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


      var _test01_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./test01.page */
      "Q/KU");

      var routes = [{
        path: '',
        component: _test01_page__WEBPACK_IMPORTED_MODULE_3__["Test01Page"]
      }];

      var Test01PageRoutingModule = function Test01PageRoutingModule() {
        _classCallCheck(this, Test01PageRoutingModule);
      };

      Test01PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Test01PageRoutingModule);
      /***/
    },

    /***/
    "okAj":
    /*!***********************************************!*\
      !*** ./src/app/pages/test01/test01.module.ts ***!
      \***********************************************/

    /*! exports provided: Test01PageModule */

    /***/
    function okAj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Test01PageModule", function () {
        return Test01PageModule;
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


      var _test01_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./test01-routing.module */
      "b4wI");
      /* harmony import */


      var _test01_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./test01.page */
      "Q/KU");

      var Test01PageModule = function Test01PageModule() {
        _classCallCheck(this, Test01PageModule);
      };

      Test01PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _test01_routing_module__WEBPACK_IMPORTED_MODULE_5__["Test01PageRoutingModule"]],
        declarations: [_test01_page__WEBPACK_IMPORTED_MODULE_6__["Test01Page"]]
      })], Test01PageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-test01-test01-module-es5.js.map