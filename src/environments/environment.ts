// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // This is a public key. It is exposed as a URL parameter when requesting maps data from mapbox
  MAPBOX_API_KEY:
    'pk.eyJ1IjoicHNldWRvc3BlbmNlciIsImEiOiJja2E5Ym9lamIwcWw3MnNvenowNXprOTR5In0.4Pj8KF0gj-lyKP5OdlppFA',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
