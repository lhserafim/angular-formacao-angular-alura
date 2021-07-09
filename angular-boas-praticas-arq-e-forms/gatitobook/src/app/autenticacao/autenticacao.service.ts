import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient, private usuarioService: UsuarioService) { }

  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    // O método post espera a url e o body como parâmetros
    return this.httpClient.post('http://localhost:3000/user/login', {
      userName: usuario,
      password: senha,
    },
    { observe: 'response'} // Estou falando p/ o Angular que eu quero também o header, além do body
    ).pipe(
      tap((res) => { // Utilizamos o tap() quando queremos fazer alguma implementação que NÃO NOS IMPORTA O RESULTADO. Ou seja, chamar algo para logar ou salvar, mas não vamos usar o retorno
        const authToken = res.headers.get('x-access-token') ?? '';
        this.usuarioService.salvaToken(authToken);
      })
    )
  }
}
