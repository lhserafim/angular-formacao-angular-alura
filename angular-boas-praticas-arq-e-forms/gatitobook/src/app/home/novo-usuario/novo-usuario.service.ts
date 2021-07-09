import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private httpClient: HttpClient) { }

  cadastraNovoUsuario(NovoUsuario: NovoUsuario) {
    // Este método retorna um observable
    return this.httpClient.post("http://localhost:3000/user/signup", NovoUsuario);
  }

  verificaUsuarioExistente(nomeUsuario: String) {
    return this.httpClient.get(`http://localhost:3000/user/exists/${nomeUsuario}`);
  }
  
}
