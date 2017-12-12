import { Component, OnInit, AfterViewInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  f: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.f = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, Validators.required],
      remember_me: [null]
    });

    this.authService.userIsLoggedin();
  }

  getErrorMessage() {
    return this.f.controls.email.hasError('required') ? 'Preencha com seu e-mail' :
        this.f.controls.email.hasError('email') ? 'E-mail não válido!'
         : '';
  }

  login() { // Login With Email And Password
    const auth = this.authService.loginWithEmailAndPassword(this.f.value);
    if (auth) {

      // ...
    }
  }

  loginGoogle() { // Login with Google OAuth
    this.authService.loginGoogle();
  }

}
