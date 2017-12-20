import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csv-dynamic-table',
  templateUrl: './csv-dynamic-table.component.html',
  styleUrls: ['./csv-dynamic-table.component.css']
})
export class CsvDynamicTableComponent implements OnInit {

csvInput:string;
jsonInput:any;

  constructor() { }

  ngOnInit() {
  	this.csvInput = "assets/csv/Sample.csv";
  	this.jsonInput = JSON.parse(this.csvJSON(this.csvInput));
  	console.log("CSV : "+this.csvInput);
  	console.log("JSON : "+this.jsonInput);
  }

 
 //var csv is the CSV file with headers
 csvJSON(csv){
  var lines=csv.split("\n");

  var result = [];

  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){
	  var obj = {};
	  var currentline=lines[i].split(",");

	  for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	  }

	  result.push(obj);
  }
  console.log("result : "+result);
  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
}

}
