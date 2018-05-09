import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPaginatorComponent } from './event-paginator.component';

describe('EventPaginatorComponent', () => {
  let component: EventPaginatorComponent;
  let fixture: ComponentFixture<EventPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
