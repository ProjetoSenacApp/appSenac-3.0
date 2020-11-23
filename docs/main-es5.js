(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! j:\Projetos\Ionic\SLTec-ionic-firebase-06\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        // 2.1) Altere os dados abaixo, conforme seu aplicativo do Firebase
        firebase: {
          apiKey: 'AIzaSyDDBcmSyAJBz0LxhDQM4EZ92hdhNQkGu2I',
          authDomain: 'ionic-firebase-exemplo-02.firebaseapp.com',
          databaseURL: 'https://ionic-firebase-exemplo-02.firebaseio.com',
          projectId: 'ionic-firebase-exemplo-02',
          storageBucket: 'ionic-firebase-exemplo-02.appspot.com',
          messagingSenderId: '674636848625',
          appId: '1:674636848625:web:36ed96e17e7a82b4c07850'
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-pwa/local-storage */
      "8YY3");
      /* harmony import */


      var _services_events_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/events.service */
      "riPR");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi"); // 3.1) Importa dependências
      // Armazenamento local
      // Dispara eventos globais
      // 18.1) Importa dependências


      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, // 3.3) Injeta dependências
        events, // Dispara eventos globais
        storage, // Armazenamento local
        // 18.2) Injeta dependências
        fbStore, fbAuth) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.events = events;
          this.storage = storage;
          this.fbStore = fbStore;
          this.fbAuth = fbAuth;
          this.initializeApp();
        } // Quando componente estiver pronto...


        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide();
            }); // 3.4) Lê login no armazenamento local

            this.storage.get('userData', {
              type: 'string'
            }).subscribe({
              next: function next(uData) {
                // Se esta logago
                if (uData) {
                  // Atualiza view
                  _this.userData = JSON.parse(uData); // 10.2) Testa se tem perfil (true ou false)

                  _this.storage.get('userProfile', {
                    type: 'string'
                  }).subscribe(function (sData) {
                    _this.userProfile = sData;
                  }); // 18.4) Conta mensagens não lidas da caixa de entrada


                  _this.fbAuth.currentUser.then(function () {
                    _this.fbStore.collection("messages/".concat(_this.userData.uid, "/inbox"), function (ref) {
                      return ref.where('status', '==', 'Não lida');
                    }).valueChanges().subscribe(function (fbData) {
                      _this.totalItems = fbData.length; // 18.5) Exporta total de mensagens não lidas da caixa de entrada

                      _this.events.publish('totalItems', _this.totalItems);
                    });
                  });
                }
              }
            }); // 3.5) Altera dados do usuário sem recarga do script (assíncrono)

            this.events.subscribe('userData', function (uData) {
              _this.userData = uData;
            }); // 10.1) Altera dados do usuário sem recarga do script (assíncrono)

            this.events.subscribe('userProfile', function (pData) {
              _this.userProfile = pData;
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
        }, {
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_8__["EventsService"]
        }, {
          type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_7__["StorageMap"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuth"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\r\n      <ion-content>\r\n        <ion-list id=\"inbox-list\">\r\n\r\n          <ion-list-header>FireUser</ion-list-header>\r\n          <ion-note>O App dos seus sonhos</ion-note>\r\n\r\n          <ion-menu-toggle auto-hide=\"false\">\r\n\r\n            <!-- Perfil do usuário logado -->\r\n\r\n            <div *ngIf=\"userData\">\r\n\r\n              <hr>\r\n\r\n              <ion-item routerDirection=\"root\" routerLink=\"/user/profile\" lines=\"none\" detail=\"false\">\r\n                <ion-avatar slot=\"start\"><img src=\"{{ userData.photoURL }}\" alt=\"{{ userData.displayName }}\">\r\n                </ion-avatar>\r\n                <ion-label>\r\n                  <h3>{{ userData.displayName }}</h3>\r\n                  <small>{{ userData.email }}</small>\r\n                </ion-label>\r\n              </ion-item>\r\n\r\n              <hr>\r\n\r\n            </div>\r\n\r\n            <hr>\r\n\r\n            <ion-item routerDirection=\"root\" routerLink=\"/\" lines=\"none\" detail=\"false\">\r\n              <ion-icon slot=\"start\" name=\"home\"></ion-icon>\r\n              <ion-label>Início</ion-label>\r\n            </ion-item>\r\n\r\n            <hr>\r\n\r\n            <!-- 3.1) Páginas restritas -->\r\n            <!-- 10.1) Sistema de mensagens somente logado e com perfil -->\r\n            <div *ngIf=\"userData && userProfile\">\r\n\r\n              <!-- 17.1) Simplificando o acesso às mensagens -->\r\n              <ion-item routerDirection=\"root\" routerLink=\"/msg/inbox\" lines=\"none\" detail=\"false\">\r\n                <ion-icon slot=\"start\" name=\"mail-unread\"></ion-icon>\r\n                <ion-label>Mensagens</ion-label>\r\n\r\n                <!-- 18.1) Exibe total de mensagens não lidas -->\r\n                <ion-badge *ngIf=\"totalItems\">{{ totalItems }}</ion-badge>\r\n              </ion-item>\r\n\r\n              <!-- 17.2) Simplificando o acesso às mensagens (comentar) -->\r\n              <!-- <ion-item routerDirection=\"root\" routerLink=\"/msg/outbox\" lines=\"none\" detail=\"false\">\r\n                <ion-icon slot=\"start\" name=\"mail\"></ion-icon>\r\n                <ion-label>Caixa de saída</ion-label>\r\n              </ion-item> -->\r\n\r\n              <hr>\r\n\r\n            </div>\r\n\r\n            <!-- 3.2) Gestão de usuário -->\r\n\r\n            <!-- Login só aparece se não está logado -->\r\n            <ion-item *ngIf=\"!userData\" routerDirection=\"root\" routerLink=\"/user/login\" lines=\"none\" detail=\"false\">\r\n              <ion-icon slot=\"start\" name=\"log-in\"></ion-icon>\r\n              <ion-label>Login / Entrar</ion-label>\r\n            </ion-item>\r\n\r\n            <!-- Profile só aparece se está logado -->\r\n            <ion-item *ngIf=\"userData\" routerDirection=\"root\" routerLink=\"/user/profile\" lines=\"none\" detail=\"false\">\r\n              <ion-icon slot=\"start\" name=\"person\"></ion-icon>\r\n              <ion-label>Seu perfil</ion-label>\r\n            </ion-item>\r\n\r\n            <!-- Logout só aparece se está logado -->\r\n            <ion-item *ngIf=\"userData\" routerDirection=\"root\" routerLink=\"/user/logout\" lines=\"none\" detail=\"false\">\r\n              <ion-icon slot=\"start\" name=\"log-out\"></ion-icon>\r\n              <ion-label>Logout / Sair</ion-label>\r\n            </ion-item>\r\n\r\n            <hr>\r\n\r\n            <!-- 3.3) Páginas sem restrição -->\r\n\r\n            <ion-item routerDirection=\"root\" routerLink=\"/contacts\" lines=\"none\" detail=\"false\">\r\n              <ion-icon slot=\"start\" name=\"chatbubbles\"></ion-icon>\r\n              <ion-label>Faça contato</ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item routerDirection=\"root\" routerLink=\"/info\" lines=\"none\" detail=\"false\">\r\n              <ion-icon slot=\"start\" name=\"information-circle\"></ion-icon>\r\n              <ion-label>Informações</ion-label>\r\n            </ion-item>\r\n\r\n            <hr>\r\n\r\n          </ion-menu-toggle>\r\n\r\n        </ion-list>\r\n\r\n      </ion-content>\r\n\r\n      <div class=\"copyright\">&copy; Copyright 2020 André Luferat</div>\r\n\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire */
      "spgP");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ngx-pwa/local-storage */
      "8YY3"); // 2.1) Importar dependências
      // 3.1) Importar 'Async local storage for Angular'


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], // 2.2) Inicializar Firebase e API's
        _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, // 3.2) Incluir service no aplicativo
        _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_13__["StorageMap"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "riPR":
    /*!********************************************!*\
      !*** ./src/app/services/events.service.ts ***!
      \********************************************/

    /*! exports provided: EventsService */

    /***/
    function riPR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsService", function () {
        return EventsService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /**
      * Service que publica alterações nas variáveis de outros scripts
      *    Fonte: https://medium.com/wizpanda/dealing-with-breaking-change-in-ionic-5-db3ba711dfcd
      *
      * @author Shashank Agrawal
      */
      // 3.1) Importa dependências necessárias


      var EventsService = /*#__PURE__*/function () {
        function EventsService() {
          _classCallCheck(this, EventsService);

          this.channels = {};
        } // 3.2) Lê alterações em outros scripts


        _createClass(EventsService, [{
          key: "subscribe",
          value: function subscribe(topic, observer) {
            if (!this.channels[topic]) {
              this.channels[topic] = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            }

            return this.channels[topic].subscribe(observer);
          } // 3.3) Salva alterações para outros scripts

        }, {
          key: "publish",
          value: function publish(topic, data) {
            var subject = this.channels[topic];

            if (!subject) {
              return;
            }

            subject.next(data);
          } // 3.4) Destroi alterações entre scripts

        }, {
          key: "destroy",
          value: function destroy(topic) {
            var subject = this.channels[topic];

            if (!subject) {
              return;
            }

            subject.complete();
            delete this.channels[topic];
          }
        }]);

        return EventsService;
      }();

      EventsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], EventsService);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/auth-guard */
      "HTFn"); // 3.1) Importando dependências
      // 3.2) Se não está logado, roteia para 'login'


      var toLogin = function toLogin() {
        return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["redirectUnauthorizedTo"])(['/user/login']);
      }; // 3.3) Se está logado, roteia para a 'raiz'


      var isLogged = function isLogged() {
        return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["redirectLoggedInTo"])(['/']);
      };

      var routes = [// Define página inicial
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, // 3.4) Página acessíveis com/sem login
      {
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-home-home-module */
          "pages-home-home-module").then(__webpack_require__.bind(null,
          /*! ./pages/home/home.module */
          "99Un")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'info',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-info-info-module */
          "pages-info-info-module").then(__webpack_require__.bind(null,
          /*! ./pages/info/info.module */
          "hico")).then(function (m) {
            return m.InfoPageModule;
          });
        }
      }, {
        path: 'contacts',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-contacts-contacts-module */
          "pages-contacts-contacts-module").then(__webpack_require__.bind(null,
          /*! ./pages/contacts/contacts.module */
          "EWb5")).then(function (m) {
            return m.ContactsPageModule;
          });
        }
      }, // 3.5) Páginas acessíveis somente se logado
      {
        path: 'test01',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-test01-test01-module */
          "pages-test01-test01-module").then(__webpack_require__.bind(null,
          /*! ./pages/test01/test01.module */
          "okAj")).then(function (m) {
            return m.Test01PageModule;
          });
        },
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthGuard"]],
        data: {
          authGuardPipe: toLogin
        }
      }, {
        path: 'test02',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-test02-test02-module */
          "pages-test02-test02-module").then(__webpack_require__.bind(null,
          /*! ./pages/test02/test02.module */
          "oDcM")).then(function (m) {
            return m.Test02PageModule;
          });
        },
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthGuard"]],
        data: {
          authGuardPipe: toLogin
        }
      }, // 3.6) Rotas para gestão de usuário ficam antes da rota '**'
      {
        path: 'user/login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | user-login-login-module */
          "user-login-login-module").then(__webpack_require__.bind(null,
          /*! ./user/login/login.module */
          "EhU7")).then(function (m) {
            return m.LoginPageModule;
          });
        },
        // 3.7) Se está logado, não entra em login
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthGuard"]],
        data: {
          authGuardPipe: isLogged
        }
      }, {
        path: 'user/logout',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | user-logout-logout-module */
          "user-logout-logout-module").then(__webpack_require__.bind(null,
          /*! ./user/logout/logout.module */
          "fsJ+")).then(function (m) {
            return m.LogoutPageModule;
          });
        }
      }, {
        path: 'user/new',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | user-new-new-module */
          [__webpack_require__.e("default~user-edit-edit-module~user-new-new-module"), __webpack_require__.e("user-new-new-module")]).then(__webpack_require__.bind(null,
          /*! ./user/new/new.module */
          "Js6N")).then(function (m) {
            return m.NewPageModule;
          });
        },
        // 3.8) Só se cadastra estiver logado
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthGuard"]],
        data: {
          authGuardPipe: toLogin
        }
      }, {
        path: 'user/profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | user-profile-profile-module */
          "user-profile-profile-module").then(__webpack_require__.bind(null,
          /*! ./user/profile/profile.module */
          "HKqj")).then(function (m) {
            return m.ProfilePageModule;
          });
        },
        // 3.9) Só vê perfil se estiver logado
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthGuard"]],
        data: {
          authGuardPipe: toLogin
        }
      }, // 9.1) Rota para edição de perfil
      {
        path: 'user/edit',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | user-edit-edit-module */
          [__webpack_require__.e("default~user-edit-edit-module~user-new-new-module"), __webpack_require__.e("user-edit-edit-module")]).then(__webpack_require__.bind(null,
          /*! ./user/edit/edit.module */
          "26qn")).then(function (m) {
            return m.EditPageModule;
          });
        },
        // 9.2) Só vê perfil se estiver logado
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthGuard"]],
        data: {
          authGuardPipe: toLogin
        }
      }, // 10.1) Sistema de mensagens (somente logado)
      {
        // 12.1) Rota para exibir uma mensagem única
        path: 'msg/view/:msgBox/:msgId',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | msg-view-view-module */
          [__webpack_require__.e("common"), __webpack_require__.e("msg-view-view-module")]).then(__webpack_require__.bind(null,
          /*! ./msg/view/view.module */
          "yqK2")).then(function (m) {
            return m.ViewPageModule;
          });
        },
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthGuard"]],
        data: {
          authGuardPipe: toLogin
        }
      }, {
        path: 'msg/send',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | msg-send-send-module */
          [__webpack_require__.e("common"), __webpack_require__.e("msg-send-send-module")]).then(__webpack_require__.bind(null,
          /*! ./msg/send/send.module */
          "oy9T")).then(function (m) {
            return m.SendPageModule;
          });
        },
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthGuard"]],
        data: {
          authGuardPipe: toLogin
        }
      }, {
        path: 'msg/inbox',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | msg-inbox-inbox-module */
          [__webpack_require__.e("common"), __webpack_require__.e("msg-inbox-inbox-module")]).then(__webpack_require__.bind(null,
          /*! ./msg/inbox/inbox.module */
          "5ZWC")).then(function (m) {
            return m.InboxPageModule;
          });
        },
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthGuard"]],
        data: {
          authGuardPipe: toLogin
        }
      }, {
        path: 'msg/outbox',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | msg-outbox-outbox-module */
          [__webpack_require__.e("common"), __webpack_require__.e("msg-outbox-outbox-module")]).then(__webpack_require__.bind(null,
          /*! ./msg/outbox/outbox.module */
          "hNGJ")).then(function (m) {
            return m.OutboxPageModule;
          });
        },
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthGuard"]],
        data: {
          authGuardPipe: toLogin
        }
      }, {
        // 15.1) Rota para responder mensagem
        path: 'msg/reply/:msgBox/:msgId',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | msg-reply-reply-module */
          [__webpack_require__.e("common"), __webpack_require__.e("msg-reply-reply-module")]).then(__webpack_require__.bind(null,
          /*! ./msg/reply/reply.module */
          "9f5s")).then(function (m) {
            return m.ReplyPageModule;
          });
        },
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthGuard"]],
        data: {
          authGuardPipe: toLogin
        }
      }, {
        // 16.1) Rota para apagar conta
        path: 'user/delete',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | user-delete-delete-module */
          "user-delete-delete-module").then(__webpack_require__.bind(null,
          /*! ./user/delete/delete.module */
          "yvyI")).then(function (m) {
            return m.DeletePageModule;
          });
        },
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthGuard"]],
        data: {
          authGuardPipe: toLogin
        }
      }, // Página de 'erro 404' para rotas inexistentes. DEVE SER SEMPRE A ÚLTIMA ROTA!!!
      {
        path: '**',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-e404-e404-module */
          "pages-e404-e404-module").then(__webpack_require__.bind(null,
          /*! ./pages/e404/e404.module */
          "QPNz")).then(function (m) {
            return m.E404PageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\nion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\nion-menu.md ion-list {\n  padding: 20px 0;\n}\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n/* 1.1) Borda inferior */\nion-menu.md ion-list#inbox-list {\n  /* border-bottom: 1px solid var(--ion-color-step-150, #d7d8da); */\n  border: none;\n}\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 1.5rem;\n  font-weight: bold;\n  min-height: 0.5rem;\n}\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/* 1.2) Separador (<hr>) */\nion-menu-toggle hr {\n  margin: 0;\n  display: block;\n  border: none;\n  border-top: 1px dotted grey;\n}\n/* 1.3) Subtítulo do menu (<ion-note>) */\nion-menu ion-note {\n  font-size: small;\n}\n/* 1.4) Copyright */\n.copyright {\n  padding: 0.4rem 0;\n  font-size: small;\n  text-align: center;\n  color: var(--ion-color-medium-shade);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLDJFQUFBO0FBRUY7QUFDQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBRUY7QUFDQTtFQUNFLGVBQUE7QUFFRjtBQUNBO0VBQ0UsbUJBQUE7QUFFRjtBQUNBOztFQUVFLGtCQUFBO0FBRUY7QUFDQSx3QkFBQTtBQUNBO0VBQ0UsaUVBQUE7RUFDQSxZQUFBO0FBRUY7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUVGO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFFRjtBQUNBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRUY7QUFDQTtFQUNFLHNEQUFBO0FBRUY7QUFDQTtFQUNFLCtCQUFBO0FBRUY7QUFDQTtFQUNFLGNBQUE7QUFFRjtBQUNBO0VBQ0UsZ0JBQUE7QUFFRjtBQUNBO0VBQ0Usc0JBQUE7QUFFRjtBQUNBO0VBQ0UsbUJBQUE7QUFFRjtBQUNBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUVGO0FBQ0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQUNBO0VBQ0UsK0JBQUE7QUFFRjtBQUNBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFFRjtBQUNBO0VBQ0Usa0JBQUE7QUFFRjtBQUNBOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFFRjtBQUNBO0VBQ0Usa0JBQUE7QUFFRjtBQUNBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFDRjtBQUVBO0VBQ0UsaUNBQUE7QUFDRjtBQUVBLDBCQUFBO0FBQ0E7RUFDRSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQUNGO0FBRUEsd0NBQUE7QUFDQTtFQUNFLGdCQUFBO0FBQ0Y7QUFFQSxtQkFBQTtBQUNBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4vKiAxLjEpIEJvcmRhIGluZmVyaW9yICovXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgLyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7ICovXG4gIGJvcmRlcjogbm9uZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1pbi1oZWlnaHQ6IDAuNXJlbTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBjb2xvcjogIzc1NzU3NTtcbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi8qIDEuMikgU2VwYXJhZG9yICg8aHI+KSAqL1xuaW9uLW1lbnUtdG9nZ2xlIGhyIHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItdG9wOiAxcHggZG90dGVkIGdyZXk7XG59XG5cbi8qIDEuMykgU3VidMOtdHVsbyBkbyBtZW51ICg8aW9uLW5vdGU+KSAqL1xuaW9uLW1lbnUgaW9uLW5vdGUge1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4vKiAxLjQpIENvcHlyaWdodCAqL1xuLmNvcHlyaWdodCB7XG4gIHBhZGRpbmc6IDAuNHJlbSAwO1xuICBmb250LXNpemU6IHNtYWxsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn0iXX0= */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map