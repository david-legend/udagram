// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appName: 'Udagram',
  apiHost: 'http://a6acc5b0ceb7d496d960be85a4e018f4-1335544812.us-east-1.elb.amazonaws.com:8080/api/v0',
  // apiHost: 'http://localhost:8080/api/v0',
  // userApiHost: 'http://localhost:8080/api/v0',
  // feedApiHost: 'http://localhost:8082/api/v0',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
