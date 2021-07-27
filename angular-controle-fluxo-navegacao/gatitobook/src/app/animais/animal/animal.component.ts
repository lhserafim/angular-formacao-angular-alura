import { Component, Input, OnInit } from '@angular/core';

// Definir o endereço da API
const API = 'http://localhost:3000';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  
  private urlOriginal = '';
  
  // 2.3. Como a informação vem de outro componente, preciso utilizar o decorator @Input
  @Input() descricao = '';

  // 2.3. Vamos utilizar a funcionalidade set, do JS, para deixar a variável ainda mais dinâmica
  // Ou seja, estou usando um método para setar a variável url
  @Input() set url(url: string) {
    if (url.startsWith('data')) { // Se a url começar com data, eu sei que ela está vindo da própria aplicação e não de um http, como um back
      this.urlOriginal = url;
    } else {
      this.urlOriginal = `${API}/imgs/${url}`; // Está vindo da API
    }
  }

  // E obviamente como eu tenho um set, tbm preciso de um get
  get url(): string {
    return this.urlOriginal;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
