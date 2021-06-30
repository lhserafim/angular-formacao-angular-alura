import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) { 
    this.listaTransferencia = []; // Inicializando o atributo
  }

  // Fiz o get pois o atributo é privado
  get transferencias(){
    return this.listaTransferencia;
    
  }
  
  // Método que irá consumir os dados da API e retorna um observable
  // Como é um observable, preciso tipar ele get<Transferencia[]>
  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);
    // this.listaTransferencia.push(transferencia);
    // Comentando o .push acima pois agora os valores serão passados via post ao invés de adicionados a um array
    return this.httpClient.post<Transferencia>(this.url, transferencia);

  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
