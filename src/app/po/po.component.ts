import { Component, OnInit } from '@angular/core';
import { checkStringArray } from '../Utils'
import { DataService } from '../data.service'

@Component({
  selector: 'app-po',
  templateUrl: './po.component.html',
  styleUrls: ['./po.component.css']
})

export class PoComponent implements OnInit {

  constructor(private data:DataService) { }

  ngOnInit() {
    checkStringArray(this.headers);
    checkStringArray(this.jsons);
    checkStringArray(this.forms);
    this.headersInit = this.headers.slice(0) ;
    this.jsonsInit = this.jsons.slice(0) ;
    this.formsInit = this.forms.slice(0) ;
    this.testResponse();
//    console.log(this.data);
    
  }
  
  private method: string = "PUT" ;
  private url: string = "http://some.com" ;
  private urlSuggestions: string[] = ["four", "two", "three"] ;
  private headerSuggestions = ["a", "b", "c"] ;
  private headersInit: string[] ;
  private headers = ["one", "two", "three"];
  private jsonSuggestions = ["d", "e", "f"] ;
  private jsonsInit: string[] ;
  private jsons = ["four", "five", "six"];
  private formSuggestions = ["g", "h", "i"] ;
  private formsInit: string[] ;
  private forms = ["seven", "eight", "nine"];
  private respStatus ;
  private respHeaders ;
  private respBody ;
  private bodyType = "Json";
  private intClean ;

//  private oneAuto = "this";
//  private autoI = 4 ;
//  private oneAutoPlace = "one auto";
  
  private setMethod(e){
    this.method = e ;
  }

  private setUrl(e){
  console.log("seturl");
    this.url = e ;
  }

  setHeader(e){
    this.headers[e.index] = e.value;
  }
  
  setJson(e){
    this.jsons[e.index] = e.value;
  }
  
  setForm(e){
    this.forms[e.index] = e.value;
  }
  
  setBodyType(e){
    this.bodyType = e ;
  }
  
  setHttpResponse(resp){
    this.respStatus = resp.status ;
    this.respHeaders = resp.headers ;
    this.respBody = resp.body ;
  }
  
  testResponse(){
    let resp = {
      status: "200 OK",
      headers: ["one", "two", "three"],
      body: "this is the body",
    }
    this.setHttpResponse (resp) ;
  }
  
/* Awesomely ugly hack
the template for po uses ngFor to display the header, json, and form fields
"checkStringArray" checks the arrays that drive these displays,
and ensures that there's *one* blank at the end, and *no* blanks in the middle
*but* when this array is rendered by ngFor, the "blank" at the end shows
as a duplicate of the line above it (which *was* blank a moment ago)

setting the new line as " ", rather than blank makes it *appear* to be correct, and then
"cleanNewOne" puts the correct data it.

I'm sure there's a better solution to this, but this is the best I can do at the moment.
*/
  
  cleanHeadersNewOne = e=>{
    this.headersInit = this.headers.slice(0) ;
    clearInterval(this.intClean);
  }
  
  cleanJsonsNewOne = e=>{
    this.jsonsInit = this.jsons.slice(0) ;
    clearInterval(this.intClean);
  }
  
  cleanFormsNewOne = e=>{
    this.formsInit = this.forms.slice(0) ;
    clearInterval(this.intClean);
  }
  
  checkStrings(e, t){
    switch(t){
    case "head":
      if (checkStringArray(this.headers)){
        this.intClean = setInterval(this.cleanHeadersNewOne, 100) ;
        this.headersInit[this.headersInit.length - 1] += " " ;
      }
      break ;
    case "json":
      if (checkStringArray(this.jsons)){
        this.intClean = setInterval(this.cleanJsonsNewOne, 100) ;
        this.jsonsInit[this.jsonsInit.length - 1] += " " ;
      }
      break ;
    case "form":
      if (checkStringArray(this.forms)){
        this.intClean = setInterval(this.cleanFormsNewOne, 100) ;
        this.formsInit[this.formsInit.length - 1] += " " ;
      }
      break ;
    
    }
  }
  


}
