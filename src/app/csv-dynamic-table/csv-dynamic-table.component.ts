import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csv-dynamic-table',
  templateUrl: './csv-dynamic-table.component.html',
  styleUrls: ['./csv-dynamic-table.component.css']
})
export class CsvDynamicTableComponent implements OnInit {

tabledata: any;
csvtext:any;
jsonData:JSON;
header:any;

constructor(){}

ngOnInit(){
}

onFileSelect(input: HTMLInputElement) {

const files = input.files;

if (files && files.length) {
    let tempData = this;
    console.log("Filename: " + files[0].name);
    console.log("Type: " + files[0].type);
    console.log("Size: " + files[0].size + " bytes");

    const fileToRead = files[0];

    const fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent){
      tempData.csvtext = fileReader.result;
      tempData.test();
    };
    fileReader.readAsText(files[0]);
  }      
}
   
test(){
  console.log('this.csvtext======');console.log(this.csvtext);
  this.jsonData = JSON.parse(this.csvJSON(this.csvtext));
  console.log("CSV : "+this.csvtext);
  console.log("JSON : "+this.jsonData);
}

//var csv is the CSV file with headers
csvJSON(csv){
  var lines=csv.split("\r\n");
  var result = [];
                                                 // var tdata;
  

  var headers=lines[0].split(",");
  this.header = headers;
  console.log("header : "+this.header);
  
  for(var i=1;i<lines.length-1;i++){
    var obj = {};
                                                   //var arr =[];
    var currentline=lines[i].split(",");

    for(var j=0;j<currentline.length;j++){
      obj[headers[j]] = currentline[j];
                                                   // tdata[i-1][j] = currentline[j];
    }
    result.push(obj);
                                                    
  }
                                                    // this.tabledata = tdata;
                                                    //console.log("tabledata====== : "+this.tabledata);
 // return result; //JavaScript object
  return JSON.stringify(result); //JSON
}

/*csvInput;
jsonInput:any;

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
}*/

}

