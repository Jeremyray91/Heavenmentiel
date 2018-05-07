import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEventsUserComponent } from './search-events-user.component';

describe('SearchEventsUserComponent', () => {
  let component: SearchEventsUserComponent;
  let fixture: ComponentFixture<SearchEventsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEventsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEventsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
