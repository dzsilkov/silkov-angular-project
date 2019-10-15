import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBaseFormComponent } from './add-base-form.component';

describe('AddBaseFormComponent', () => {
  let component: AddBaseFormComponent;
  let fixture: ComponentFixture<AddBaseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBaseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
