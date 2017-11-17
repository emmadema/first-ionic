import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PeopleServiceProvider } from '../../providers/people-service/people-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public peopleServiceProvider : PeopleServiceProvider) {
  	this.getUsers();
  }

  users: any;

  getUsers(){
  	this.peopleServiceProvider.getUsers()
  	.then(data => {
  		this.users = data;
  	});
  }
}
