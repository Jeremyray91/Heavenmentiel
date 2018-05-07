import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionAdminComponent } from './connection-admin.component';

describe('ConnectionAdminComponent', () => {
  let component: ConnectionAdminComponent;
  let fixture: ComponentFixture<ConnectionAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
