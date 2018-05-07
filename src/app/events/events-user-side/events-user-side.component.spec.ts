import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsUserSideComponent } from './events-user-side.component';

describe('EventsUserSideComponent', () => {
  let component: EventsUserSideComponent;
  let fixture: ComponentFixture<EventsUserSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsUserSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsUserSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
