import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { minusculoValidator } from './minusculo.validator';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';
import { UsuarioExisteService } from './usuario-existe.service';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';

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
    private usuarioExistenteService: UsuarioExisteService,
    private router: Router) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [minusculoValidator], [this.usuarioExistenteService.usuarioJaExiste()]],  // IMPORTANTE! O array de validação assíncrona precisa estar na terceira posição
      password: ['']
    },
    {
      validators: [usuarioSenhaIguaisValidator],
    });
  }

  // Este método será executado no evento de onSubmit do formulário
  cadastrar() {
    if (this.novoUsuarioForm.valid) {
      // getRawValue gera um objeto com o estado das variáveis do novo formulário
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario; // as NovoUsuario é um cast e só posso fazê-lo pois os meus elementos de novoUsuarioForm são idênticos a NovoUsuario.ts
      this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe(
        () => {
          this.router.navigate(['']);
        },
        (error) => {
          console.log(error);
        }
      )
    }
    

  }

}
