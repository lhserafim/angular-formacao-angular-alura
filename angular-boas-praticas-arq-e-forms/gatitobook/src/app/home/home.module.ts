import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  exports: [ // Exportando o componente para que seja vísivel "fora do módulo" (não necessário com rotas Lazy Load)
    //HomeComponent
  ]
})
export class HomeModule { }
