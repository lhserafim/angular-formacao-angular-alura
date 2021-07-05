import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemComponent } from './mensagem.component';



@NgModule({
  declarations: [
    MensagemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MensagemComponent // é necessário exportar este componente
  ]
})
export class MensagemModule { }
