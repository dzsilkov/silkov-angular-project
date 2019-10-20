import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportBaseComponent } from './sport-base-detail.component';

describe('SportBaseComponent', () => {
  let component: SportBaseComponent;
  let fixture: ComponentFixture<SportBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
