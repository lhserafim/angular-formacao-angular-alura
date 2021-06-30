import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TransferenciaService } from 'src/app/services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() onTranferir = new EventEmitter<any>();

  // O símbolo ! é usado quando não inicializamos a variável. Desta forma estamos dizendo que ele é um 
  // definite assignment assertion
  valor!: number;
  destino!: string;

  constructor(private service: TransferenciaService, private router: Router) { }

  ngOnInit(): void {
  }

  transferir() {
    console.log('Solicitada nova transferencia');
    // Utilizando o .emit() para emitir o evento para que possa ser capturado por outro componente
    // this.onTranferir.emit({
    //   valor: this.valor, destino: this.destino
    // })

    this.service.adicionar({valor: this.valor, destino: this.destino}).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos(); // preciso colocar aqui pois como é assíncrono preciso garantir que limpe os campos
      this.router.navigateByUrl('extrato');
    }, error => console.error(error)); // O subscribe permite implementar uma ação quando um erro é retornado
  }

  limparCampos() {
    this.valor = 0;
    this.destino = "0";
  }

}
