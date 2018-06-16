import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTypeSelectComponent } from './body-type-select.component';

describe('BodyTypeSelectComponent', () => {
  let component: BodyTypeSelectComponent;
  let fixture: ComponentFixture<BodyTypeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyTypeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyTypeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
