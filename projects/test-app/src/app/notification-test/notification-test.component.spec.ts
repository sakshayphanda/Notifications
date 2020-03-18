import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationTestComponent } from './notification-test.component';

describe('NotificationTestComponent', () => {
  let component: NotificationTestComponent;
  let fixture: ComponentFixture<NotificationTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
