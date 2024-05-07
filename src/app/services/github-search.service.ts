import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root',
  
})

export class GithubSearchService {
  getData(username: string) {
    return axios.get(`https://api.github.com/users/${username}/repos`);
  }
}
