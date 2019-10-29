import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportBasesComponent } from './sport-bases.component';

describe('SportBasesComponent', () => {
  let component: SportBasesComponent;
  let fixture: ComponentFixture<SportBasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportBasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportBasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
