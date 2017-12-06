import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from '../services/auth.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { firebaseConfig } from '../classes/FirebaseConfig';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [],
  providers: [AuthService, AngularFireAuth]
})
export class AuthModule {}
