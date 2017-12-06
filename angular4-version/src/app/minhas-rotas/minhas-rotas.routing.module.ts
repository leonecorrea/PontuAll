import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MinhasRotasComponent } from './minhas-rotas.component';

const routes: Routes = [
  { path: '', component: MinhasRotasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class MinhasRotasRoutingModule {}
