import { Component, OnInit } from '@angular/core';
import {animate, state, style} from '@angular/animations'

@Component({
  selector: 'app-if-else-then',
  templateUrl: './if-else-then.component.html',
  styleUrls: ['./if-else-then.component.css']
})
export class IfElseThenComponent implements OnInit {

checker:boolean;

  constructor() { }

  ngOnInit() {

  	this.checker = null;
  }

}
