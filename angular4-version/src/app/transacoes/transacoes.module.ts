import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransacoesComponent } from './transacoes.component';
import { TransacoesRoutingModule } from './transacoes.routing.module';

@NgModule({
  imports: [
    CommonModule,
    TransacoesRoutingModule
  ],
  declarations: [TransacoesComponent]
})
export class TransacoesModule { }
