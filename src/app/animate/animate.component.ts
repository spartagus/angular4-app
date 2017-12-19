import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, 
  keyframes, query, stagger } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css'],
  animations: [
	  trigger('goals', [
		  transition('* => *', [
			  query(':enter', style({opacity: 0}),{optional: true}),

			  query(':enter', stagger('1300ms',[
				  animate('2s ease-in', keyframes([
					  style({opacity: 0, transform: 'translateX(75%)', offset: 0}),
					  style({opacity: .5, transform: 'translateY(135px)', offset: 0.5}),
				  	style({opacity: 1, transform: 'translateY(0)', offset: 1})
					]))
				]),{optional: true})
			])
		])
 	]
})


export class AnimateComponent implements OnInit {
  itemCount: number = undefined;
  goalText:string;
  btnText:string = "Add a goal";
  goals = ['my first goal','my second data', 'my third data'];

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(res => console.log(res.id))
  }

  ngOnInit() {
  	this.itemCount = this.goals.length;
  }

  addGoal(){
  	this.goals.push(this.goalText);
  	this.goalText = "";
  	this.itemCount = this.goals.length;
  }

}
