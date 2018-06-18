import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-method-select',
  templateUrl: './method-select.component.html',
  styleUrls: ['./method-select.component.css']
})
export class MethodSelectComponent implements OnInit {

  constructor() { }
  ngOnInit() { }
  
  @Input () method: string ;
  @Output() setValue: EventEmitter<string> = new EventEmitter();
  
  private changeMethod(e){
    this.setValue.emit(e);
  }

}
