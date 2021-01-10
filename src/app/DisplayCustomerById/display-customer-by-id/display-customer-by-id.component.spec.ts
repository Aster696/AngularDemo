import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCustomerByIdComponent } from './display-customer-by-id.component';

describe('DisplayCustomerByIdComponent', () => {
  let component: DisplayCustomerByIdComponent;
  let fixture: ComponentFixture<DisplayCustomerByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCustomerByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCustomerByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
