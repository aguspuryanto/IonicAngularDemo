import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GitHubService } from '../../services/github.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GitHubService]
})
export class HomePage {

  public foundRepos;
  public username;

  constructor(private github: GitHubService) { }

  constructor(public navCtrl: NavController) { }

  getRepos() {
  	this.foundRepos = this.github.getRepos(this.username);
  }

}
