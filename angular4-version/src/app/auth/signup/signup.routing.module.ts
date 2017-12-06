import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SignupComponent } from './signup.component';
import { Next1Component } from './next1/next1.component';

const routes: Routes = [
  { path: '', component: SignupComponent },
  { path: 'next1', component: Next1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SignupRoutingModule {}
