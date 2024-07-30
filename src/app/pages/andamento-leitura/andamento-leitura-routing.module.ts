import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AndamentoLeituraPage } from './andamento-leitura.page';

const routes: Routes = [
  {
    path: '',
    component: AndamentoLeituraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AndamentoLeituraPageRoutingModule {}
