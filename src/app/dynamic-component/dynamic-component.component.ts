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
	compName: string;
	btnText: string = "Change component";	
  dcimg: string;
  dcimgif: string;
  Component;
	//Component = .2 > 0.5 ? AotComponent : HomeComponent ;	
	
  constructor() { }

  ngOnInit() {
  	this.compName = "";
    //this.dcimg = "assets/images/dynamic/error.JPG" ;
    //this.dcimgif = "assets/images/dynamic/errorif.JPG" ;
  }

  changeComp(){

  	if(this.compName == "home"){
  		this.Component = HomeComponent ;
      this.dcimg = "assets/images/dynamic/home.JPG" ;
      this.dcimgif = "assets/images/dynamic/homeif.JPG" ;
  	}
  	else if(this.compName == "ifelse"){
  		this.Component = IfElseThenComponent ;
      this.dcimg = "assets/images/dynamic/ifelse.JPG" ;
      this.dcimgif = "assets/images/dynamic/ifelseif.JPG" ;
  	}
  	else if(this.compName == "aot"){
  		this.Component = AotComponent ;
      this.dcimg = "assets/images/dynamic/aot.JPG" ;
      this.dcimgif = "assets/images/dynamic/aotif.JPG" ;
  	}
  	else if(this.compName == "animation"){
  		this.Component = AnimateComponent ;
      this.dcimg = "assets/images/dynamic/animate.JPG" ;
      this.dcimgif = "assets/images/dynamic/animateif.JPG" ;
  	}
  	else{
  		this.Component = ErrorPageComponent ;
      this.dcimg = "assets/images/dynamic/error.JPG" ;
      this.dcimgif = "assets/images/dynamic/errorif.JPG" ;
  	}
  }
}

