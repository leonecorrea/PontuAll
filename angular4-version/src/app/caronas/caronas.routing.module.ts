import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaronasComponent } from './caronas.component';

const routes: Routes = [
  { path: '', component: CaronasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CaronasRoutingModule {}
