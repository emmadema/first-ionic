import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PeopleServiceProvider } from '../../providers/people-service/people-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public peopleServiceProvider: PeopleServiceProvider) {
  	this.saveUser();  
  }

  user = {name: ''};

  saveUser(){
  	this.peopleServiceProvider.saveUser(this.user).then((result) =>{
  		console.log(result);
  	}, (err) => {
  		console.log(err);
  	});
  }

}
