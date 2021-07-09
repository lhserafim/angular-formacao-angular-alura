import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  retornaToken() {
    return localStorage.getItem(KEY) ?? ''; // ?? '' É um recurso do TypeScript que usamos e estamos dizendo que caso seja undefined, retorne string vazia
  }

  salvaToken(token: string) {
    localStorage.setItem(KEY, token);
  }

  excluiToken() {
    localStorage.removeItem(KEY);
  }

  possuiToken() {
    return !!this.retornaToken(); // Quando utilizamos !! estamos transformando o retorno em um boolean
  }
}
