import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AndamentoLeituraPageRoutingModule } from './andamento-leitura-routing.module';

import { AndamentoLeituraPage } from './andamento-leitura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AndamentoLeituraPageRoutingModule
  ],
  declarations: [AndamentoLeituraPage]
})
export class AndamentoLeituraPageModule {}
