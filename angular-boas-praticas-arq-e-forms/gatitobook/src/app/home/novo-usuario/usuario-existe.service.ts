import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { debounceTime, first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private novoUsuarioService: NovoUsuarioService) { }


  usuarioJaExiste() {
    // Este método vai retornar uma função
    return (control: AbstractControl) => { // Esta função (interna), vai retornar um observable, pois é assíncrona (este observable representa a requisição)
      return control.valueChanges.pipe( // O angular rastreia a digitação do usuário utilizando um observable. 
        debounceTime(300), // Para não ficar enviando requisições a cada letra
        switchMap((nomeUsuario) => 
          this.novoUsuarioService.verificaUsuarioExistente(nomeUsuario) // converte o fluxo da digitação em um fluxo de requisição
        // O switchMap, recebe o nome do usuário que está sendo digitado e converte isso na requisição do backend
      ),
      map((usuarioExiste) => 
        usuarioExiste ? {usuarioExistente: true} : null // map vai fazer a troca do resultado
      ),
      first() // encerra o fluxo do observable
      );
    };
  }
}
