// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyDIHgJJuJrbeTiVnR8h2d0yKRKuPHZVgeo',
    authDomain: 'project-pontuall.firebaseapp.com',
    databaseURL: 'https://project-pontuall.firebaseio.com',
    projectId: 'project-pontuall',
    storageBucket: 'project-pontuall.appspot.com',
    messagingSenderId: '333830512768'
  }
};
