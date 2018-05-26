// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
   firebaseConfig : {
    apiKey: "AIzaSyDIPyOzsDBiexvKK2j3x3XKBAy9vwFXKLc",
    authDomain: "ng5-firebase-crud-8e99a.firebaseapp.com",
    databaseURL: "https://ng5-firebase-crud-8e99a.firebaseio.com",
    projectId: "ng5-firebase-crud-8e99a",
    storageBucket: "ng5-firebase-crud-8e99a.appspot.com",
    messagingSenderId: "435976980032"
  }
};

