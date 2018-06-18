import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawBodyComponent } from './raw-body.component';

describe('RawBodyComponent', () => {
  let component: RawBodyComponent;
  let fixture: ComponentFixture<RawBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
