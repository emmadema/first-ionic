import { HttpClient } from '@angular/common/http';
// import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
/*
  Generated class for the PeopleServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PeopleServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PeopleServiceProvider Provider');
  }

  data : any;

  apiUrl = 'https://jsonplaceholder.typicode.com';

	getUsers(){
  		if (this.data) {
    	return Promise.resolve(this.data);
  	}
  		return new Promise(resolve => {
    	this.http.get(this.apiUrl+'/users')
      		// .map((res: Response) => res.json())
      		.subscribe(data => {
        		this.data = data;
        		resolve(this.data);
      	});
  	});
  }

  	saveUser(data) {
  		return new Promise((resolve, reject) => {
    		this.http.post(this.apiUrl+'/users', JSON.stringify(data))
      		.subscribe(res => {
        		resolve(res);
      		}, (err) => {
        		reject(err);
      		});
  		});
	}
}
