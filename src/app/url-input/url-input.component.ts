import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-url-input',
  templateUrl: './url-input.component.html',
  styleUrls: ['./url-input.component.css']
})
export class UrlInputComponent implements OnInit {
  urlInputForm: FormGroup ;
  filteredOptions: Observable<string[]>;

  constructor() { }

  @Input () options: string[] ;
  @Input () url: string ;
  @Output() setValue: EventEmitter<string> = new EventEmitter();


  ngOnInit() {
    this.urlInputForm = new FormGroup({
       urlInput: new FormControl(this.url)
    });  
//    console.log (this.urlInputForm.controls.urlInput);
    this.filteredOptions = this.urlInputForm.controls.urlInput.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
    this.urlInputForm.controls.urlInput.valueChanges.subscribe(v=>{this.setValue.emit(v)}) ;
  }

  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  } 
  
}
