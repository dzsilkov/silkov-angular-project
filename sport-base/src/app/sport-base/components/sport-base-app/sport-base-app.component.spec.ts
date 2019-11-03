import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportBaseAppComponent } from './sport-base-app.component';

describe('SportBaseAppComponent', () => {
  let component: SportBaseAppComponent;
  let fixture: ComponentFixture<SportBaseAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportBaseAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportBaseAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
