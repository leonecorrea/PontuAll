import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { stringify } from 'querystring';

@Injectable()
export class AuthService {
  private urlLogin: any = '';
  public userLoggedinOAuth = false;

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  loginWithEmailAndPassword(u) { // Função para login com email e senha
    return;
  }

  loginGoogle() { // Função para OAuth Google
    this.loginWithGoogleRedirect();
  }

  loginWithGooglePopup() { // Login Google Com Popup
    const provider = new firebase.auth.GoogleAuthProvider();

    provider.setCustomParameters({
      '': ''
    });

    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        console.log(token);

        // The signed-in user info.
        const user = result.user;
        console.log(user);

        // ...
      })
      .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
      });
  }

  loginWithGoogleRedirect() { // Login com google redirect
    const provider = new firebase.auth.GoogleAuthProvider();

    provider.setCustomParameters({
      'redirectUrl': 'http://localhost/dashboard'
    });

    // Redirecionar para pagina de autenticação
    firebase.auth().signInWithRedirect(provider);

    firebase.auth().getRedirectResult().then(function(result) {
        if (result.credential) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const token = result.credential.accessToken;
          // ...
          console.log(token);
        }
        // The signed-in user info.
        const user = result.user;
        console.log(user);
      })
      .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
      });
  }

  // Verifica se o usuário já está autenticado pelo OAuth do Google
  isUserEqual(googleUser, firebaseUser) {
    if (firebaseUser) {
      const providerData = firebaseUser.providerData;
      for (let i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  }

  onSignIn(googleUser) {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    const unsubscribe = firebase
      .auth()
      .onAuthStateChanged(function(firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!this.isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          let credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.getAuthResponse().id_token
          );
          // Sign in with credential from the Google user.
          firebase.auth().signInWithCredential(credential).catch(function(error) {
              // Handle Errors here.
              const errorCode = error.code;
              const errorMessage = error.message;
              // The email of the user's account used.
              const email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              credential = error.credential;
              // ...
            });
        } else {
          console.log('User already signed-in Firebase.');
        }
      });
  }

  logout() {
    // Logout do App
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }

  userIsLoggedin() {
    // Função para ver se usuário já está logado
    if (localStorage.getItem('firebase:authUser:AIzaSyDIHgJJuJrbeTiVnR8h2d0yKRKuPHZVgeo:[DEFAULT]')) {
      const dados = JSON.parse(localStorage.getItem('firebase:authUser:AIzaSyDIHgJJuJrbeTiVnR8h2d0yKRKuPHZVgeo:[DEFAULT]'));
        this.router.navigate(['/dashboard']);
      console.log(dados);
    }
  }

  getDataWithGoogle() {
    return JSON.parse(localStorage.getItem('firebase:authUser:AIzaSyDIHgJJuJrbeTiVnR8h2d0yKRKuPHZVgeo:[DEFAULT]'));
  }
}
// https://firebase.google.com/docs/auth/web/google-signin?hl=pt-br

/**
Autenticar usando o Login do Google com JavaScript

Com a integração do Login do Google ao seu app, você pode permitir que os usuários usem as Contas do
Google deles para a autenticação no Firebase. Para integrar, use o SDK do Firebase para executar o fluxo
de login automaticamente, ou execute-o manualmente e transmita o token de código resultante para o Firebase.

Antes de começar

Adicione o Firebase ao seu projeto do JavaScript.
Ative o Login do Google no Firebase console:
No Firebase console, abra a seção Autenticação.
Na guia Método de login, ative o método de login do Google e clique em Salvar.
Processar o fluxo de login com o SDK do Firebase

Se você está desenvolvendo um app da Web, a maneira mais fácil de autenticar seus usuários com o Firebase
usando contas do Twitter é processando o fluxo de login com o SDK do Firebase para JavaScript. Se você
quiser autenticar um usuário no Node.js ou outro ambiente fora do navegador, precisará processar o fluxo
de login manualmente.

Para processar o fluxo de login com o SDK do Firebase para JavaScript, siga estas etapas:

Crie uma instância do objeto provedor do Google:
var provider = new firebase.auth.GoogleAuthProvider();
Opcional: especifique os escopos de OAuth 2.0 adicionais que você deseja solicitar ao provedor de
autenticação. Para adicionar um escopo, chame addScope. Por exemplo:
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
Consulte a documentação do provedor de autenticação.
Opcional: para localizar o fluxo OAuth do provedor para a linguagem preferida do usuário sem passar
explicitamente os parâmetros de OAuth personalizados relevantes, atualize o código do idioma na instância
de Auth antes de iniciar o fluxo de OAuth. Por exemplo:
firebase.auth().languageCode = 'pt';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();
Opcional: especifique outros parâmetros personalizados do provedor de OAuth que você quer enviar com a
solicitação OAuth. Para adicioná-los, chame setCustomParameters no provedor inicializado com um objeto que
contenha a chave especificada na documentação do provedor de OAuth e o valor correspondente. Por exemplo:
provider.setCustomParameters({
  'login_hint': 'user@example.com'
});
Os parâmetros de OAuth reservados obrigatórios não são permitidos e serão ignorados. Consulte a referência
do provedor de autenticação para saber mais.
Use o objeto provedor do Google para a autenticação no Firebase. Você pode solicitar que os usuários façam
login nas Contas do Google deles em uma nova janela pop-up ou com redirecionamento para a página de login.
O método de redirecionamento é recomendável para dispositivos móveis.
Para solicitar o login em uma janela pop-up, chame signInWithPopup:
firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
Observe que você também pode recuperar o token de OAuth do provedor do Google, que pode ser usado para
acessar dados adicionais usando as APIs do Google.
Também é nesse local que você pode identificar e corrigir erros. Para ver uma lista de códigos de erro,
consulte os Documentos de referência de autenticação.
Para redirecionar os usuários para a página de solicitação de login, chame signInWithRedirect:
firebase.auth().signInWithRedirect(provider);
Depois, você também pode recuperar o token de OAuth do provedor do Google chamando getRedirectResult quando sua página for carregada:
firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // ...
  }
  // The signed-in user info.
  var user = result.user;
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
Também é nesse local que você pode identificar e corrigir erros. Para ver uma lista de códigos de erro,
consulte os Documentos de referência de autenticação.
▸
Processar erros account-exists-with-different-credential

▾
Avançado: processar o fluxo de login manualmente

Você também pode usar uma Conta do Google para a autenticação no Firebase processando o fluxo de login com o SDK de Login do Google:

Integre o Login do Google ao seu app seguindo o guia de integração. Para configurar o Login do Google,
use o ID do cliente do Google gerado para seu projeto do Firebase. Você pode encontrar esse ID na página
Credenciais do Developers Console. Em seguida, substitua:
<!-- **********************************************
     * TODO(DEVELOPER): Use your Client ID below. *
     ********************************************** -->
<meta name="google-signin-client_id" content="YOUR_CLIENT_ID">
<meta name="google-signin-cookiepolicy" content="single_host_origin">
<meta name="google-signin-scope" content="profile email">
Depois de integrar o Login do Google, sua página da Web terá um botão desse serviço, configurado com uma
função de retorno de chamada como no exemplo a seguir:
<div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
No retorno de chamada de resultado do botão de login, troque o token de código da resposta de autenticação
do Google por uma credencial do Firebase e faça login no Firebase:
function onSignIn(googleUser) {
  console.log('Google Auth Response', googleUser);
  // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
    unsubscribe();
    // Check if we are already signed-in Firebase with the correct user.
    if (!isUserEqual(googleUser, firebaseUser)) {
      // Build Firebase credential with the Google ID token.
      var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.getAuthResponse().id_token);
      // Sign in with credential from the Google user.
      firebase.auth().signInWithCredential(credential).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    } else {
      console.log('User already signed-in Firebase.');
    }
  });
}
Também é nesse local que você pode identificar e corrigir erros. Para ver uma lista de códigos de erro,
consulte os Documentos de referência de autenticação.
Além disso, você deve verificar se o usuário do Google já está conectado ao Firebase para evitar reautenticações desnecessárias:
function isUserEqual(googleUser, firebaseUser) {
  if (firebaseUser) {
    var providerData = firebaseUser.providerData;
    for (var i = 0; i < providerData.length; i++) {
      if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()) {
        // We don't need to reauth the Firebase connection.
        return true;
      }
    }
  }
  return false;
}
*/
