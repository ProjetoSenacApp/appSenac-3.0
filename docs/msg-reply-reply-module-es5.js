(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["msg-reply-reply-module"], {
    /***/
    "/hBr":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/msg/reply/reply.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function hBr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <!-- 15.1) Menu e título -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Responder</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <!-- 15.2) Inclui seletor do componente do formulário de resposta -->\r\n    <app-message></app-message>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<!-- 17.1) Menu de mensagens -->\r\n<app-msg-menu></app-msg-menu>";
      /***/
    },

    /***/
    "1acG":
    /*!***************************************************!*\
      !*** ./src/app/msg/reply/reply-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ReplyPageRoutingModule */

    /***/
    function acG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReplyPageRoutingModule", function () {
        return ReplyPageRoutingModule;
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


      var _reply_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reply.page */
      "Kd5+");

      var routes = [{
        path: '',
        component: _reply_page__WEBPACK_IMPORTED_MODULE_3__["ReplyPage"]
      }];

      var ReplyPageRoutingModule = function ReplyPageRoutingModule() {
        _classCallCheck(this, ReplyPageRoutingModule);
      };

      ReplyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ReplyPageRoutingModule);
      /***/
    },

    /***/
    "5j9j":
    /*!*********************************************************!*\
      !*** ./src/app/components/message/message.component.ts ***!
      \*********************************************************/

    /*! exports provided: MessageComponent */

    /***/
    function j9j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageComponent", function () {
        return MessageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_message_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./message.component.html */
      "Yqe+");
      /* harmony import */


      var _message_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./message.component.scss */
      "8NGp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-pwa/local-storage */
      "8YY3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _services_app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/app.service */
      "OaWH");
      /* harmony import */


      var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/events.service */
      "riPR"); // 15.1) Importa dependências


      var MessageComponent = /*#__PURE__*/function () {
        function MessageComponent( // 15.2) Injeta dependências
        formBuilder, storage, router, fbStore, app, events, route) {
          var _this = this;

          _classCallCheck(this, MessageComponent);

          this.formBuilder = formBuilder;
          this.storage = storage;
          this.router = router;
          this.fbStore = fbStore;
          this.app = app;
          this.events = events;
          this.route = route;
          this.btnText = 'Enviar resposta'; // Texto do botão de envio
          // 15.4) Obtém nome da caixa (inbox / outbox) e Id da mensagem (-> msgParams)

          this.route.params.subscribe(function (atributes) {
            _this.msgParams = atributes;
          }); // 15.5) Obtém dados do usuário logado (-> userData e userProfile)

          this.storage.get('userData', {
            type: 'string'
          }).subscribe(function (uData) {
            if (!uData) {
              _this.router.navigate(['/user/login']);
            }

            _this.userData = JSON.parse(uData);

            _this.storage.get('userProfile', {
              type: 'string'
            }).subscribe(function (pData) {
              if (!pData) {
                _this.router.navigate(['/user/new']);
              }

              _this.userProfile = JSON.parse(pData);
            }); // 15.6) Obtém mensagem a ser respondida (-> msgToReply)


            _this.fbStore.collection("messages/".concat(_this.userData.uid, "/").concat(_this.msgParams.msgBox)).doc(_this.msgParams.msgId).valueChanges().subscribe(function (msgData) {
              _this.msgToReply = msgData; // 15.7) Obtém dados do correspondente (-> msgWhon)

              _this.fbStore.collection('users').doc(_this.msgToReply.from).valueChanges().subscribe(function (wData) {
                _this.msgWhon = wData; // 15.8) Cria formulário (-> messageForm)

                _this.messageFormCreate();
              });
            });
          });
        }

        _createClass(MessageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // 15.9) Cria formulário da memsagem usando ReactiveForms

        }, {
          key: "messageFormCreate",
          value: function messageFormCreate() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.messageForm = this.formBuilder.group({
                        userTo: [this.msgWhon.name],
                        subject: ["Re: ".concat(this.msgToReply.subject), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)])],
                        message: ["\n\nMensagem original: \n--------------------\n".concat(this.msgToReply.message, "\n--------------------\n"), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)])]
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // 15.10) Processa envio da mensagem

        }, {
          key: "messageSubmit",
          value: function messageSubmit() {
            console.log(this.messageForm.value);
          }
        }]);

        return MessageComponent;
      }();

      MessageComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_5__["StorageMap"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]
        }, {
          type: _services_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"]
        }, {
          type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_9__["EventsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }];
      };

      MessageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-message',
        template: _raw_loader_message_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_message_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MessageComponent);
      /***/
    },

    /***/
    "8NGp":
    /*!***********************************************************!*\
      !*** ./src/app/components/message/message.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function NGp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "9f5s":
    /*!*******************************************!*\
      !*** ./src/app/msg/reply/reply.module.ts ***!
      \*******************************************/

    /*! exports provided: ReplyPageModule */

    /***/
    function f5s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReplyPageModule", function () {
        return ReplyPageModule;
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


      var _reply_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./reply-routing.module */
      "1acG");
      /* harmony import */


      var _reply_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./reply.page */
      "Kd5+");
      /* harmony import */


      var _components_message_message_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/message/message.component */
      "5j9j");
      /* harmony import */


      var _components_msg_menu_msg_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../components/msg-menu/msg-menu.component */
      "7WMo"); // 15.1) Importa dependências
      // 17.1) Importa dependências


      var ReplyPageModule = function ReplyPageModule() {
        _classCallCheck(this, ReplyPageModule);
      };

      ReplyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _reply_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReplyPageRoutingModule"], // 15.2) Injeta dependências
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_reply_page__WEBPACK_IMPORTED_MODULE_6__["ReplyPage"], // 15.3) Declara componente importado
        _components_message_message_component__WEBPACK_IMPORTED_MODULE_7__["MessageComponent"], // 17.2) Declara dependências
        _components_msg_menu_msg_menu_component__WEBPACK_IMPORTED_MODULE_8__["MsgMenuComponent"]]
      })], ReplyPageModule);
      /***/
    },

    /***/
    "Kd5+":
    /*!*****************************************!*\
      !*** ./src/app/msg/reply/reply.page.ts ***!
      \*****************************************/

    /*! exports provided: ReplyPage */

    /***/
    function Kd5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReplyPage", function () {
        return ReplyPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_reply_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./reply.page.html */
      "/hBr");
      /* harmony import */


      var _reply_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reply.page.scss */
      "zgGZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ReplyPage = /*#__PURE__*/function () {
        function ReplyPage() {
          _classCallCheck(this, ReplyPage);
        }

        _createClass(ReplyPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ReplyPage;
      }();

      ReplyPage.ctorParameters = function () {
        return [];
      };

      ReplyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reply',
        template: _raw_loader_reply_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reply_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ReplyPage);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
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
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } // 4.3) Método que detecta a presença do perfil local

        }, {
          key: "isProfile",
          value: function isProfile() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      return _context3.abrupt("return", new Promise(function (resolve, reject) {
                        // Lê o armazenamento local
                        _this2.storage.get('userProfile', {
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
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
          } // 13.3) Apaga uma mensagem da caixa de mensagens

        }, {
          key: "msgDelete",
          value: function msgDelete(userId, msgBox, msgId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
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
                            _this3.fbStore.collection("messages/".concat(userId, "/").concat(msgBox)).doc(msgId).update({
                              status: 'Apagada'
                            }) // Se a mensagem foi apagada, retorna para a listagem da caixa
                            .then(function () {
                              _this3.router.navigate(["/msg/".concat(msgBox)]);
                            }) // Se deu erro, exibe
                            ["catch"](function (error) {
                              console.log(error);
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
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
    "Yqe+":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/message/message.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Yqe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"messageForm\">\r\n\r\n  <p class=\"ion-text-center\">\r\n    <small>\r\n      <ion-text color=\"danger\">Preencha todos os campos.</ion-text>\r\n    </small>\r\n  </p>\r\n\r\n  <form [formGroup]=\"messageForm\" (ngSubmit)=\"messageSubmit()\">\r\n\r\n    <ion-list lines=\"full\" id=\"profileList\" class=\"ion-no-padding\">\r\n\r\n      <ion-item>\r\n        <ion-label for=\"userTo\" position=\"floating\" color=\"primary\">Para:</ion-label>\r\n        <ion-input type=\"text\" id=\"userTo\" name=\"userTo\" formControlName=\"userTo\" readonly=\"true\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label for=\"subject\" position=\"floating\" color=\"primary\">\r\n          Assunto:\r\n          <ion-text color=\"danger\" *ngIf=\"messageForm.controls.subject.errors\">\r\n            <small *ngIf=\"messageForm.controls.subject.errors.required\">* Obrigatório</small>\r\n            <small *ngIf=\"messageForm.controls.subject.errors.minlength\">* Inválido</small>\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-input type=\"text\" id=\"subject\" name=\"subject\" formControlName=\"subject\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label for=\"message\" position=\"floating\" color=\"primary\">\r\n          Mensagem:\r\n          <ion-text color=\"danger\" *ngIf=\"messageForm.controls.message.errors\">\r\n            <small *ngIf=\"messageForm.controls.message.errors.required\">* Obrigatório</small>\r\n            <small *ngIf=\"messageForm.controls.message.errors.minlength\">* Inválido</small>\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-textarea rows=\"10\" type=\"text\" id=\"message\" name=\"message\" formControlName=\"message\"></ion-textarea>\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n\r\n    <ion-button type=\"submit\" expand=\"block\" class=\"ion-margin-vertical\" [disabled]=\"messageForm.invalid\">{{ btnText }}\r\n    </ion-button>\r\n\r\n  </form>\r\n\r\n</div>";
      /***/
    },

    /***/
    "zgGZ":
    /*!*******************************************!*\
      !*** ./src/app/msg/reply/reply.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function zgGZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21zZy9yZXBseS9yZXBseS5wYWdlLnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=msg-reply-reply-module-es5.js.map