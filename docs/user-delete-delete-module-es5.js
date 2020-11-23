(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-delete-delete-module"], {
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
    "Ox1/":
    /*!********************************************!*\
      !*** ./src/app/user/delete/delete.page.ts ***!
      \********************************************/

    /*! exports provided: DeletePage */

    /***/
    function Ox1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeletePage", function () {
        return DeletePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_delete_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./delete.page.html */
      "VEtF");
      /* harmony import */


      var _delete_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./delete.page.scss */
      "t279");
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
      "OaWH");
      /* harmony import */


      var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-pwa/local-storage */
      "8YY3");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/events.service */
      "riPR");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! firebase/app */
      "Wcq6");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/"); // 16.1) Importa dependências


      var DeletePage = /*#__PURE__*/function () {
        function DeletePage( // 16.2) Injeta dependências
        router, app, storage, fbAuth, fbStore, events, alertController) {
          _classCallCheck(this, DeletePage);

          this.router = router;
          this.app = app;
          this.storage = storage;
          this.fbAuth = fbAuth;
          this.fbStore = fbStore;
          this.events = events;
          this.alertController = alertController;
        }

        _createClass(DeletePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            // 16.4) Obtém o perfil local
            this.storage.get('userData', {
              type: 'string'
            }).subscribe(function (uData) {
              _this3.userData = JSON.parse(uData);
            });
          } // 16.5) Processa remoção completa do cadastro

        }, {
          key: "accountDelete",
          value: function accountDelete() {
            var _this4 = this;

            // Seleciona o provedor de login social
            switch (this.userData.provider) {
              case 'google':
                this.authProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_10__["auth"].GoogleAuthProvider();
                break;

              case 'facebook':
                this.authProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_10__["auth"].FacebookAuthProvider();
                break;

              case 'twitter':
                this.authProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_10__["auth"].TwitterAuthProvider();
                break;

              case 'github':
                this.authProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_10__["auth"].GithubAuthProvider();
                break;
              // case ....
            } // Por segurança, força reautenticação do usuário


            Object(firebase_app__WEBPACK_IMPORTED_MODULE_10__["auth"])().currentUser.reauthenticateWithPopup(this.authProvider).then(function () {
              // Apaga perfil e login local e global
              _this4.storage["delete"]('userData').subscribe();

              _this4.storage["delete"]('userProfile').subscribe();

              _this4.events.publish('userData', null);

              _this4.events.publish('userProfile', null); // 'Apaga' perfil no Cloud Firestore


              _this4.fbStore.collection("users").doc(_this4.userData.uid).update({
                status: 'apagado'
              }); // Apaga usuário do Firebase Authentication


              Object(firebase_app__WEBPACK_IMPORTED_MODULE_10__["auth"])().currentUser["delete"]().then(function () {
                // Roteia a página inicial
                _this4.router.navigate(['/']);
              });
            });
          }
        }]);

        return DeletePage;
      }();

      DeletePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]
        }, {
          type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_6__["StorageMap"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"]
        }, {
          type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_9__["EventsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["AlertController"]
        }];
      };

      DeletePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-delete',
        template: _raw_loader_delete_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_delete_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DeletePage);
      /***/
    },

    /***/
    "VEtF":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/delete/delete.page.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function VEtF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Apagar Conta</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <h2 class=\"ion-text-center\">\r\n      <ion-text color=\"danger\">Atenção!</ion-text>\r\n    </h2>\r\n\r\n    <p><strong>Tem certeza que deseja apagar sua conta?</strong></p>\r\n    <p>Lembre-se que essa ação é irreversível e você terá que criar uma nova conta para ter acesso aos recursos do\r\n      aplicativo!</p>\r\n    <p><small>Por segurança, será solicitado que você faça login no provedor novamente.</small></p>\r\n    &nbsp;\r\n\r\n    <ion-button expand=\"block\" color=\"success\" routerLink=\"/user/profile\">\r\n      <ion-icon name=\"checkmark-circle\"></ion-icon>&nbsp;\r\n      Não, voltar para o perfil!\r\n    </ion-button>\r\n\r\n    &nbsp;\r\n\r\n    <ion-button expand=\"block\" color=\"danger\" (click)=\"accountDelete()\">\r\n      <ion-icon name=\"close-circle\"></ion-icon>&nbsp;\r\n      Sim, apagar conta!\r\n    </ion-button>\r\n\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "t279":
    /*!**********************************************!*\
      !*** ./src/app/user/delete/delete.page.scss ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function t279(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZGVsZXRlL2RlbGV0ZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "vMUC":
    /*!******************************************************!*\
      !*** ./src/app/user/delete/delete-routing.module.ts ***!
      \******************************************************/

    /*! exports provided: DeletePageRoutingModule */

    /***/
    function vMUC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeletePageRoutingModule", function () {
        return DeletePageRoutingModule;
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


      var _delete_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./delete.page */
      "Ox1/");

      var routes = [{
        path: '',
        component: _delete_page__WEBPACK_IMPORTED_MODULE_3__["DeletePage"]
      }];

      var DeletePageRoutingModule = function DeletePageRoutingModule() {
        _classCallCheck(this, DeletePageRoutingModule);
      };

      DeletePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DeletePageRoutingModule);
      /***/
    },

    /***/
    "yvyI":
    /*!**********************************************!*\
      !*** ./src/app/user/delete/delete.module.ts ***!
      \**********************************************/

    /*! exports provided: DeletePageModule */

    /***/
    function yvyI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeletePageModule", function () {
        return DeletePageModule;
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


      var _delete_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./delete-routing.module */
      "vMUC");
      /* harmony import */


      var _delete_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./delete.page */
      "Ox1/");

      var DeletePageModule = function DeletePageModule() {
        _classCallCheck(this, DeletePageModule);
      };

      DeletePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _delete_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeletePageRoutingModule"]],
        declarations: [_delete_page__WEBPACK_IMPORTED_MODULE_6__["DeletePage"]]
      })], DeletePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-delete-delete-module-es5.js.map