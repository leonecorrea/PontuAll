import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinhasRotasRoutingModule } from './minhas-rotas.routing.module';
import { MinhasRotasComponent } from './minhas-rotas.component';

@NgModule({
  imports: [
    CommonModule,
    MinhasRotasRoutingModule
  ],
  declarations: [MinhasRotasComponent]
})
export class MinhasRotasModule { }
