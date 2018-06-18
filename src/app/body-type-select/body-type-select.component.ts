import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-body-type-select',
  templateUrl: './body-type-select.component.html',
  styleUrls: ['./body-type-select.component.css']
})
export class BodyTypeSelectComponent implements OnInit {
  @Input () bodytype: string ;
  @Output() setValue: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
