import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationCartComponent } from './validation-cart.component';

describe('ValidationCartComponent', () => {
  let component: ValidationCartComponent;
  let fixture: ComponentFixture<ValidationCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
