import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from '../shared';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  declarations: [],
  providers: [AuthService, AngularFireAuth]
})
export class AuthModule {}
