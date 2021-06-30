import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  // transferencia: any = {};
  // transformando em coleção
  // transferencias: any[] = [];

  constructor(private service: TransferenciaService) { }

  transferir($event: any) {
    console.log($event);
    // this.transferencia = $event;
    
    // A lógica abaixo foi levada para o transferencia.service
    
    // para eu poder passar os dados do $event eu preciso usar o operador spred, para retirar os atributos do objeto
    // também posso adicionar um atributo
    // const transferencia = {...$event, data: new Date()}
    // this.transferencias.push(transferencia);

    // Recebe o $event e propaga para o service
    this.service.adicionar($event);
  }
}
