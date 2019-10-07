// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080',
  firebase: {
    apiKey: 'AIzaSyDSJP72a55Io2IOkIkf3celNeO_H-lpqVw',
    authDomain: 'alpha-project-fond-end.firebaseapp.com',
    databaseURL: 'https://alpha-project-fond-end.firebaseio.com',
    projectId: 'alpha-project-fond-end',
    storageBucket: '',
    messagingSenderId: '891431111668'
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
