import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarEditarLivroPage } from './adicionar-editar-livro.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarEditarLivroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarEditarLivroPageRoutingModule {}
