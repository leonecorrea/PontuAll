import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  Validators
 } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  f: FormGroup;

  ngOnInit() {
    this.f = this.formBuilder.group({
      name: [null],
      email: [null, [Validators.email, Validators.required]],
      password: [null]
    });
  }

  avancar() {
    console.log(this.f.value);
    this.router.navigate(['/dashboard']);
  }

}
