import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [ // Exportando o componente para que seja vísivel "fora do módulo" (não necessário com rotas Lazy Load)
    //HomeComponent
  ]
})
export class HomeModule { }
