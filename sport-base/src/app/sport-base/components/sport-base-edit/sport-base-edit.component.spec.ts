import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportBaseEditComponent } from './sport-base-edit.component';

describe('SportBaseEditComponent', () => {
  let component: SportBaseEditComponent;
  let fixture: ComponentFixture<SportBaseEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportBaseEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportBaseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
