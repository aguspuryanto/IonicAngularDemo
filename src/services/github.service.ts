import { Injectable } from '@angular/core'; 
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService { 

  constructor(private http: Http) { }

  getRepos(username) {
    return this.http.get("https://api.github.com/users/aguspuryanto/repos").map(data => data.json());
  }
}