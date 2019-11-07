import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportBasesAppComponent } from './sport-bases-app.component';

describe('SportBasesAppComponent', () => {
  let component: SportBasesAppComponent;
  let fixture: ComponentFixture<SportBasesAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportBasesAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportBasesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
