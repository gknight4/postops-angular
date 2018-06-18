import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-one-autocomplete',
  templateUrl: './one-autocomplete.component.html',
  styleUrls: ['./one-autocomplete.component.css']
})

export class OneAutocompleteComponent implements OnInit {
//  @Input () suggestions: string[] ;
  @Input () value: string ;
  @Input () index: number ;
  @Input () options: string[] ;
  @Input () placeholder: string ;
  @Output() setValue: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();
  autoCompForm: FormGroup ;
  filteredOptions: Observable<string[]>;

  constructor() { }



  ngOnInit() {
    this.autoCompForm = new FormGroup({
       autoCompInput: new FormControl(this.value)
    });  
//    console.log (this.autoCompForm.controls.autoCompInput);
    this.filteredOptions = this.autoCompForm.controls.autoCompInput.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
    this.autoCompForm.controls.autoCompInput.valueChanges.subscribe(v=>{this.setValue.emit({index: this.index, value: v})}) ;
  }

  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  } 
  
/*  ngOnChanges(){
    console.log("ngOnChanges") ;
    if (this.autoCompForm) 
      console.log(this.autoCompForm.controls.autoCompInput);
    else
      console.log("null");
  }
  ngDoCheck(){
  console.log("ngDoCheck") ;
  }
  ngAfterContentInit(){
  console.log("ngAfterContentInit") ;
  }
//  ngAfterContentChecked(){
//  console.log("ngAfterContentChecked") ;
//  }
  ngAfterViewInit(){
  console.log("ngAfterViewInit") ;
  }
//  ngAfterViewChecked(){
//  console.log("ngAfterViewChecked") ;
//  }
  ngOnDestroy(){
  console.log("ngOnDestroy") ;
  }*/
  
}

