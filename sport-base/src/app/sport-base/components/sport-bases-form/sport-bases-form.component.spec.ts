import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportBasesFormComponent } from './sport-bases-form.component';

describe('SportBasesFormComponent', () => {
  let component: SportBasesFormComponent;
  let fixture: ComponentFixture<SportBasesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportBasesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportBasesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
