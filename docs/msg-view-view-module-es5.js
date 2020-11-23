(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["msg-view-view-module"], {
    /***/
    "K7ny":
    /*!*************************************************!*\
      !*** ./src/app/msg/view/view-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: ViewPageRoutingModule */

    /***/
    function K7ny(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewPageRoutingModule", function () {
        return ViewPageRoutingModule;
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


      var _view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view.page */
      "LOkr");

      var routes = [{
        path: '',
        component: _view_page__WEBPACK_IMPORTED_MODULE_3__["ViewPage"]
      }];

      var ViewPageRoutingModule = function ViewPageRoutingModule() {
        _classCallCheck(this, ViewPageRoutingModule);
      };

      ViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ViewPageRoutingModule);
      /***/
    },

    /***/
    "LOkr":
    /*!***************************************!*\
      !*** ./src/app/msg/view/view.page.ts ***!
      \***************************************/

    /*! exports provided: ViewPage */

    /***/
    function LOkr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewPage", function () {
        return ViewPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_view_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./view.page.html */
      "wV9n");
      /* harmony import */


      var _view_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./view.page.scss */
      "Srb5");
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
      "OaWH");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d"); // 10.1) Importa dependências
      // 12.1) Importa dependências


      var ViewPage = /*#__PURE__*/function () {
        function ViewPage( // 10.2) Injeta dependências
        router, app, storage, // 12.2) Injeta dependências
        route, fbStore) {
          _classCallCheck(this, ViewPage);

          this.router = router;
          this.app = app;
          this.storage = storage;
          this.route = route;
          this.fbStore = fbStore;
        }

        _createClass(ViewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // 12.4) Obtém nome da caixa (inbox / outbox) e Id da mensagem
            this.route.params.subscribe(function (atributes) {
              _this.msgParams = atributes;
            });
          } // 10.4) Se tem perfil, obtém dados.
          //       Se não tem, vai para "novo perfil"

        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            // Testa o perfil local (true e false)
            this.app.isProfile().then(function (data) {
              // Se existe, faz as ações da página
              if (data) {
                // Obtém dados do login local e armazena em 'userData'
                _this2.storage.get('userData', {
                  type: 'string'
                }).subscribe(function (uData) {
                  _this2.userData = JSON.parse(uData); // Obtém dados do perfil local e armazena em 'userProfile'

                  _this2.storage.get('userProfile', {
                    type: 'string'
                  }).subscribe(function (pData) {
                    _this2.userProfile = JSON.parse(pData); // 12.5) Obtém a mensagem única

                    _this2.getMessage();
                  });
                }); // Se não existe perfil, vai para o cadastro de perfil

              } else {
                _this2.router.navigate(['/user/new']);
              }
            });
          } // 12.6) Obtém a mensagem única

        }, {
          key: "getMessage",
          value: function getMessage() {
            var _this3 = this;

            // Consulta o banco de dados
            this.fbStore.collection("messages/".concat(this.userData.uid, "/").concat(this.msgParams.msgBox)).doc(this.msgParams.msgId).valueChanges().subscribe(function (mData) {
              _this3.viewMsg = mData; // 13.1) Melhora visualização da mensagem

              _this3.viewMsg.message = _this3.viewMsg.message.replace(/\\r\\n/g, '<br />'); // Obtém uid do interlocutor.

              if (_this3.msgParams.msgBox === 'inbox') {
                _this3.otherUSerID = _this3.viewMsg.from;
              } else {
                _this3.otherUSerID = _this3.viewMsg.to;
              } // Obtém o nome do interlocutor da mensagem


              _this3.fbStore.doc("users/".concat(_this3.otherUSerID)).valueChanges().subscribe(function (data) {
                // 13.2) Formata remetente da mensagem
                if (_this3.msgParams.msgBox === 'inbox') {
                  _this3.viewMsg.interlocutor = "De: <a href=\"".concat(_this3.viewMsg.from, "\">").concat(data.name, "</a>");
                } else {
                  _this3.viewMsg.interlocutor = "Para: <a href=\"".concat(_this3.viewMsg.to, "\">").concat(data.name, "</a>");
                }
              }); // 18.1) Atualiza status da mensagem para "Lida"


              if (_this3.msgParams.msgBox === 'inbox' && _this3.viewMsg.status === 'Não lida') {
                _this3.fbStore.collection("messages/".concat(_this3.userData.uid, "/").concat(_this3.msgParams.msgBox)).doc(_this3.msgParams.msgId).update({
                  status: 'Lida'
                });
              }
            });
          }
        }]);

        return ViewPage;
      }();

      ViewPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]
        }, {
          type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_5__["StorageMap"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]
        }];
      };

      ViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view',
        template: _raw_loader_view_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ViewPage);
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
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      return _context2.abrupt("return", new Promise(function (resolve, reject) {
                        // Lê o armazenamento local
                        _this4.storage.get('userProfile', {
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
              var _this5 = this;

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
                            _this5.fbStore.collection("messages/".concat(userId, "/").concat(msgBox)).doc(msgId).update({
                              status: 'Apagada'
                            }) // Se a mensagem foi apagada, retorna para a listagem da caixa
                            .then(function () {
                              _this5.router.navigate(["/msg/".concat(msgBox)]);
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
    "Srb5":
    /*!*****************************************!*\
      !*** ./src/app/msg/view/view.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function Srb5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21zZy92aWV3L3ZpZXcucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "wV9n":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/msg/view/view.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function wV9n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <!-- 10.1) Menu e título -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Ler mensagem</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <div *ngIf=\"viewMsg\">\r\n\r\n      <small [innerHTML]=\"viewMsg.interlocutor\"></small><br>\r\n      <small>Em: {{ viewMsg.date | date: ['dd/MM/yyyy'] }} às {{ viewMsg.date | date: ['HH:mm'] }}.</small>\r\n      <hr>\r\n      <h4>{{ viewMsg.subject }}</h4>\r\n      <!-- 14.1) Adiciona separador -->\r\n      <hr>\r\n      <!-- 13.1) Exibe mensagem -->\r\n      <div>{{ viewMsg.message }}</div>\r\n      <hr>\r\n\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col class=\"ion-text-left ion-no-padding\">\r\n            <!-- 14.2) Botão [Responder] -->\r\n            <!-- 15.1) Link no botão [Responder] -->\r\n            <ion-button routerLink=\"/msg/reply/inbox/{{ msgParams.msgId }}\">\r\n              <ion-icon name=\"send-outline\"></ion-icon>&nbsp;Responder\r\n            </ion-button>\r\n          </ion-col>\r\n\r\n          <!-- 13.2) Botão apagar mensagem -->\r\n          <!-- 14.3) Botão [Apagar] -->\r\n          <ion-col class=\"ion-text-right ion-no-padding\">\r\n            <ion-button (click)=\"app.msgDelete(userData.uid, msgParams.msgBox, msgParams.msgId)\">\r\n              <ion-icon name=\"trash-outline\"></ion-icon>&nbsp;Apagar\r\n            </ion-button>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-grid>\r\n      <!-- 18.1) Desabilita linha (comentar) -->\r\n      <!-- <hr> -->\r\n\r\n      <!-- 14.4) Botão [Caixa...] -->\r\n      <!-- 18.2) Desabilita botão (comentar) -->\r\n      <!-- <ion-button *ngIf=\"msgParams.msgBox == 'inbox'\" expand=\"block\" routerLink=\"/msg/inbox\">\r\n        <ion-icon name=\"list-outline\"></ion-icon>&nbsp;Caixa de entrada\r\n      </ion-button>\r\n      <ion-button *ngIf=\"msgParams.msgBox == 'outbox'\" expand=\"block\" routerLink=\"/msg/outbox\">\r\n        <ion-icon name=\"list-outline\"></ion-icon>&nbsp;Caixa de saída\r\n      </ion-button> -->\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<!-- 17.1) Menu de mensagens -->\r\n<app-msg-menu></app-msg-menu>";
      /***/
    },

    /***/
    "yqK2":
    /*!*****************************************!*\
      !*** ./src/app/msg/view/view.module.ts ***!
      \*****************************************/

    /*! exports provided: ViewPageModule */

    /***/
    function yqK2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewPageModule", function () {
        return ViewPageModule;
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


      var _view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./view-routing.module */
      "K7ny");
      /* harmony import */


      var _view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./view.page */
      "LOkr");
      /* harmony import */


      var src_app_components_msg_menu_msg_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/msg-menu/msg-menu.component */
      "7WMo"); // 17)


      var ViewPageModule = function ViewPageModule() {
        _classCallCheck(this, ViewPageModule);
      };

      ViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _view_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewPageRoutingModule"]],
        declarations: [_view_page__WEBPACK_IMPORTED_MODULE_6__["ViewPage"], // 17)
        src_app_components_msg_menu_msg_menu_component__WEBPACK_IMPORTED_MODULE_7__["MsgMenuComponent"]]
      })], ViewPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=msg-view-view-module-es5.js.map