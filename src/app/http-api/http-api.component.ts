import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-api',
  templateUrl: './http-api.component.html',
  styleUrls: ['./http-api.component.css']
})
export class HttpApiComponent implements OnInit {
	name:string ='';
	age:number;
	found:boolean;
  addName:string;
  addAge:number;

  constructor( private httpClient: HttpClient) { }

  ngOnInit() {
    this.addName = "";
    this.addAge = undefined;
  }

  onNameKeyUp(event:any){
  	this.name = event.target.value;
  	this.found = false;
  }

  getProfile(){
  	console.log(this.name);
  	this.httpClient.get(`https://my-json-server.typicode.com/spartagus/angular4-app/profiles/?name=${this.name}`)
  	.subscribe(
		(data: any[]) => {
			console.log(data);
			if(data.length){
				this.age = data[0].age;
				this.found = true;
			}
		}
  	)
  }

  postProfile(){
  	console.log(this.name);
  	this.httpClient.post(`https://my-json-server.typicode.com/spartagus/angular4-app/profiles/`,
  	{
  		name:this.addName,
  		age: this.addAge
  	})
  	.subscribe(
		(data: any[]) => {
			console.log(data);
      alert("new profile added: " +JSON.stringify(data));	
      this.ngOnInit();		
			}
		)
  }

}
