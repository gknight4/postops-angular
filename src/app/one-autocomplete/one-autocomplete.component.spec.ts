import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneAutocompleteComponent } from './one-autocomplete.component';

describe('OneAutocompleteComponent', () => {
  let component: OneAutocompleteComponent;
  let fixture: ComponentFixture<OneAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
