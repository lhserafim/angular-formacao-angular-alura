import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    NovoUsuarioComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MensagemModule, // Importando o módulo que tem o componente Mensagem que foi exposto
    ReactiveFormsModule
  ],
  exports: [ // Exportando o componente para que seja vísivel "fora do módulo" (não necessário com rotas Lazy Load)
    //HomeComponent
  ]
})
export class HomeModule { }
