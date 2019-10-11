import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBaseDescriptionComponent } from './add-base-description.component';

describe('AddBaseDescriptionComponent', () => {
  let component: AddBaseDescriptionComponent;
  let fixture: ComponentFixture<AddBaseDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBaseDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBaseDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
