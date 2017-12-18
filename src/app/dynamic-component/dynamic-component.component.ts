import { Component, OnInit } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { AotComponent } from '../aot/aot.component';
import { HomeComponent } from '../home/home.component';
import { IfElseThenComponent } from '../if-else-then/if-else-then.component';
import { AnimateComponent } from '../animate/animate.component';
import { ErrorPageComponent } from '../error-page/error-page.component';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css']
})
export class DynamicComponentComponent implements OnInit {

	//AotComponent = AotComponent;
	compName: string;
	btnText: string = "Change component";
	
	//Component = .2 > 0.5 ? AotComponent : HomeComponent ;
	Component;
	
  constructor() { }

  ngOnInit() {
  	this.compName = "";
  }

  changeComp(){

  	if(this.compName == "home"){
  		this.Component = HomeComponent ;
  	}
  	else if(this.compName == "ifelse"){
  		this.Component = IfElseThenComponent ;
  	}
  	else if(this.compName == "aot"){
  		this.Component = AotComponent ;
  	}
  	else if(this.compName == "animation"){
  		this.Component = AnimateComponent ;
  	}
  	else{
  		this.Component = ErrorPageComponent ;
  	}



  }
}

