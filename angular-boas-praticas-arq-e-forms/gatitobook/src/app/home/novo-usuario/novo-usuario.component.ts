import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from './minusculo.validator';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';
import { UsuarioExisteService } from './usuario-existe.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup; // Vai guardar o estado do meu formulário, pois usamos formulário reativo

  constructor(
    private formBuilder: FormBuilder, 
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExistenteService: UsuarioExisteService) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [minusculoValidator], [this.usuarioExistenteService.usuarioJaExiste()]],  // IMPORTANTE! O array de validação assíncrona precisa estar na terceira posição
      password: ['']
    })
  }

  // Este método será executado no evento de onSubmit do formulário
  cadastrar() {
    // getRawValue gera um objeto com o estado das variáveis do novo formulário
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    // as NovoUsuario é um cast e só posso fazê-lo pois os meus elementos de novoUsuarioForm são idênticos a NovoUsuario.ts
    console.log(novoUsuario);
  }

}
