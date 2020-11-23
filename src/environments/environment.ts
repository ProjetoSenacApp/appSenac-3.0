// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
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
