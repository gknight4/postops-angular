import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseStatusComponent } from './response-status.component';

describe('ResponseStatusComponent', () => {
  let component: ResponseStatusComponent;
  let fixture: ComponentFixture<ResponseStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
