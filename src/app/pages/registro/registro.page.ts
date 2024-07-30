import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: 'registro.page.html',
  styleUrls: ['registro.page.scss'],
})
export class RegistroPage {
  constructor() {}

  register() {
    // Lógica para registro do usuário
    console.log('Usuário registrado');
  }
}
