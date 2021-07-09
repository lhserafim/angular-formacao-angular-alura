import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import { Usuario } from './usuario';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // Existem diversos tipos de Subject. Um dos mais interessantes é BehaviorSubject, pois ele guarda estado!
  private usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(private tokenService: TokenService) { 
    if (this.tokenService.possuiToken()) {
      this.decodificaJWT();
    }
  }

  private decodificaJWT() {
    const token = this.tokenService.retornaToken();
    const usuario = jwt_decode(token) as Usuario; // Fazendo um cast para que o token seja transformado na interface (model) usuario.ts
    
    // Enviar a informação do usuário a todos os componentes que se subscreveram no meu observable do tipo subject
    this.usuarioSubject.next(usuario);

  }

  retornaUsuario() {
    // Vou enviar o meu retorno como observable, para que o meu subject não possa ser manipulado
    return this.usuarioSubject.asObservable();
  }

  salvaToken(token: string) {
    this.tokenService.salvaToken(token);
    this.decodificaJWT();
  }

  logout() {
    this.tokenService.excluiToken();
    this.usuarioSubject.next({});
  }

  estaLogado() {
    return this.tokenService.possuiToken();
  }
}
