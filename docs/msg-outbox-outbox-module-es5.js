(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["msg-outbox-outbox-module"], {
    /***/
    "NNRy":
    /*!*********************************************!*\
      !*** ./src/app/msg/outbox/outbox.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function NNRy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21zZy9vdXRib3gvb3V0Ym94LnBhZ2Uuc2NzcyJ9 */";
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
    "hNGJ":
    /*!*********************************************!*\
      !*** ./src/app/msg/outbox/outbox.module.ts ***!
      \*********************************************/

    /*! exports provided: OutboxPageModule */

    /***/
    function hNGJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OutboxPageModule", function () {
        return OutboxPageModule;
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


      var _outbox_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./outbox-routing.module */
      "j1ep");
      /* harmony import */


      var _outbox_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./outbox.page */
      "xIP6");
      /* harmony import */


      var _components_msg_menu_msg_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/msg-menu/msg-menu.component */
      "7WMo"); // 17.1) Importa dependências


      var OutboxPageModule = function OutboxPageModule() {
        _classCallCheck(this, OutboxPageModule);
      };

      OutboxPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _outbox_routing_module__WEBPACK_IMPORTED_MODULE_5__["OutboxPageRoutingModule"]],
        declarations: [_outbox_page__WEBPACK_IMPORTED_MODULE_6__["OutboxPage"], // 17.2) Declara dependências
        _components_msg_menu_msg_menu_component__WEBPACK_IMPORTED_MODULE_7__["MsgMenuComponent"]]
      })], OutboxPageModule);
      /***/
    },

    /***/
    "j1ep":
    /*!*****************************************************!*\
      !*** ./src/app/msg/outbox/outbox-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: OutboxPageRoutingModule */

    /***/
    function j1ep(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OutboxPageRoutingModule", function () {
        return OutboxPageRoutingModule;
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


      var _outbox_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./outbox.page */
      "xIP6");

      var routes = [{
        path: '',
        component: _outbox_page__WEBPACK_IMPORTED_MODULE_3__["OutboxPage"]
      }];

      var OutboxPageRoutingModule = function OutboxPageRoutingModule() {
        _classCallCheck(this, OutboxPageRoutingModule);
      };

      OutboxPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OutboxPageRoutingModule);
      /***/
    },

    /***/
    "o2tG":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/msg/outbox/outbox.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function o2tG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <!-- 10.1) Menu e título -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Caixa de Saída</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n\r\n<!-- 17.1) Menu de mensagens -->\r\n<app-msg-menu></app-msg-menu>";
      /***/
    },

    /***/
    "xIP6":
    /*!*******************************************!*\
      !*** ./src/app/msg/outbox/outbox.page.ts ***!
      \*******************************************/

    /*! exports provided: OutboxPage */

    /***/
    function xIP6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OutboxPage", function () {
        return OutboxPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_outbox_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./outbox.page.html */
      "o2tG");
      /* harmony import */


      var _outbox_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./outbox.page.scss */
      "NNRy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-pwa/local-storage */
      "8YY3");
      /* harmony import */


      var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/app.service */
      "OaWH"); // 10.1) Importa dependências


      var OutboxPage = /*#__PURE__*/function () {
        function OutboxPage( // 10.2) Injeta dependências
        router, app, storage) {
          _classCallCheck(this, OutboxPage);

          this.router = router;
          this.app = app;
          this.storage = storage;
        }

        _createClass(OutboxPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // 10.4) Se tem perfil, obtém dados.
          //       Se não tem, vai para "novo perfil"

        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this3 = this;

            // Testa o perfil local (true e false)
            this.app.isProfile().then(function (data) {
              // Se existe, faz as ações da página
              if (data) {
                // Obtém dados do login local e armazena em 'userData'
                _this3.storage.get('userData', {
                  type: 'string'
                }).subscribe(function (uData) {
                  _this3.userData = JSON.parse(uData); // Obtém dados do perfil local e armazena em 'userProfile'

                  _this3.storage.get('userProfile', {
                    type: 'string'
                  }).subscribe(function (pData) {
                    _this3.userProfile = JSON.parse(pData);
                  });
                }); // Se não existe perfil, vai para o cadastro de perfil

              } else {
                _this3.router.navigate(['/user/new']);
              }
            });
          }
        }]);

        return OutboxPage;
      }();

      OutboxPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]
        }, {
          type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_5__["StorageMap"]
        }];
      };

      OutboxPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-outbox',
        template: _raw_loader_outbox_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_outbox_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OutboxPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=msg-outbox-outbox-module-es5.js.map