import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersArrayComponent } from './headers-array.component';

describe('HeadersArrayComponent', () => {
  let component: HeadersArrayComponent;
  let fixture: ComponentFixture<HeadersArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadersArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadersArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
