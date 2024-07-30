import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  constructor() {}

  login() {
    // Lógica para login do usuário
    console.log('Usuário logado');
  }
}
