import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: string = '';
  senha: string = '';

  constructor(private authService: AutenticacaoService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.usuario, this.senha);
    this.authService.autenticar(this.usuario, this.senha).subscribe(() => {
      console.log('Autenticado com sucesso');
      this.router.navigate(['animais']); // Também poderia usar o navigateByUrl
    },(error) => {
        alert('Usuário ou senha inválido');
    });
  }

}
