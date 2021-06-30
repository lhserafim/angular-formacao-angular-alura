import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from 'src/app/services/transferencia.service';

import { Transferencia } from '../../../models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  // @Input() transferencias: any[] = [];
  // Não precisa mais do @Input, pois não estou passando no template 
  // Como era: <app-extrato [transferencias]="transferencias"></app-extrato>
  transferencias: any[] = [];

  // fazendo a injecao do service no construtor
  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    //this.transferencias = this.service.transferencias;
    // Ao invés de receber de um array (acima), vou retornar da API
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    })
  }

}
