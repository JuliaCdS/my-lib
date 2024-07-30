import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarEditarLivroPageRoutingModule } from './adicionar-editar-livro-routing.module';

import { AdicionarEditarLivroPage } from './adicionar-editar-livro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarEditarLivroPageRoutingModule
  ],
  declarations: [AdicionarEditarLivroPage]
})
export class AdicionarEditarLivroPageModule {}
