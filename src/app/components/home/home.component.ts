import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GithubSearchService } from '../../services/github-search.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  repos: any[] = [];
  term: string = '';

  constructor(private searchGithub: GithubSearchService) {
    
  }
  search(term: string) {
    this.searchGithub.getData(term).then(dado => {

      this.repos = dado.data.map((dado: any) => console.log(dado)); 
    })
    .catch(err => {
      console.log(err);

    })
  }

 

  
 
}

