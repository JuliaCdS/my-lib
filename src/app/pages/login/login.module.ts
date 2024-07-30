import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { RegistroPageRoutingModule } from './registro-routing.module';
import { LoginPage } from './login.page';
import { RegistroPage } from './registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    RegistroPageRoutingModule
  ],
  declarations: [LoginPage, RegistroPage]
})
export class LoginRegistroPageModule {}
