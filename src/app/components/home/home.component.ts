import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GithubSearchService } from '../../services/github-search.service';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  repos: any[] = [];
  term: string = '';
  erro?: string | null;
  title?: string;
  constructor(private searchGithub: GithubSearchService) {
    
  }
  onSearch(term: string) {

    this.erro = null;
    this.repos = [];
    if (!term || term.trim() === '') {
      this.erro = 'Por favor, insira um nome válido.';
      return;
    }
     this.searchGithub.getData(term).then(dado => {
      this.title = "Repositórios Encontrados"
      return this.repos = dado.data.map((dado: any) => dado);
    })
    .catch(err => {
      this.erro = 'Erro. Usuário não encontrado.'
      console.log(this.erro);

    })
  }
}

