import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './classes/User';
import { Observable } from 'rxjs/Observable';
import { stringify } from 'querystring';

@Injectable()
export class AuthService {
  private urlLogin: any = '';

  constructor( private afAuth: AngularFireAuth, private router: Router ) {}

   login(u) {
    // return this.http.post(this.urlLogin, u)
    // .toPromise()
    // .then(res => console.log(res));
  }

  loginGoogle() {
    return this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
      .then(
        res => {
          // this.getDataGoogleService(res);
          localStorage.getItem('firebase:authUser:AIzaSyDJkfx-JMHj4DwWzYZ3LVo3HEduujdxkFk:[DEFAULT]');
          console.log(localStorage.getItem('firebase:authUser:AIzaSyDJkfx-JMHj4DwWzYZ3LVo3HEduujdxkFk:[DEFAULT]'));
        }
      )
      .catch(error => error);
  }

  getDataGoogleService(r) {
    localStorage.setItem('isNewUser', r.additionalUserInfo.isNewUser);
    localStorage.setItem('email', r.additionalUserInfo.profile.email);
    localStorage.setItem('family_name', r.additionalUserInfo.profile.family_name);
    localStorage.setItem('gender', r.additionalUserInfo.profile.gender);
    localStorage.setItem('given_name', r.additionalUserInfo.profile.given_name);
    localStorage.setItem('id', r.additionalUserInfo.profile.id);
    localStorage.setItem('linkGooglePlay', r.additionalUserInfo.profile.link);
    localStorage.setItem('locale', r.additionalUserInfo.profile.locale);
    localStorage.setItem('name', r.additionalUserInfo.profile.name);
    localStorage.setItem('picture', r.additionalUserInfo.profile.picture);
    localStorage.setItem('verified_email', r.additionalUserInfo.profile.verified_email);
    localStorage.setItem('accessToken', r.credential.accessToken);
    localStorage.setItem('idToken', r.credential.idToken);
    localStorage.setItem('providerId', r.credential.providerId);
    localStorage.setItem('uid', r.user.uid);
  }

  logoutGoogle() {
    this.afAuth.auth.signOut();
  }

  logout() {
    this.logoutGoogle();
  }

}
