import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  f1: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.f1 = this._formBuilder.group({
      destino: [null, Validators.required],
      partida: [null, Validators.required],
      date: [null, Validators.required],
      horario: [null, Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

   // tslint:disable-next-line:member-ordering
   viagens = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
      icon: 'directions_car'
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
      icon: 'motorcycle'
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
      icon: 'motorcycle'
    }
  ];

}
