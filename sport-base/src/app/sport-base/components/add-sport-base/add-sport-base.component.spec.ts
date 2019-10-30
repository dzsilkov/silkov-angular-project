import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSportBaseComponent } from './add-sport-base.component';

describe('AddSportBaseComponent', () => {
  let component: AddSportBaseComponent;
  let fixture: ComponentFixture<AddSportBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSportBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSportBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
