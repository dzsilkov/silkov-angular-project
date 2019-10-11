import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBasePhoneComponent } from './add-base-phone.component';

describe('AddBasePhoneComponent', () => {
  let component: AddBasePhoneComponent;
  let fixture: ComponentFixture<AddBasePhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBasePhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBasePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
