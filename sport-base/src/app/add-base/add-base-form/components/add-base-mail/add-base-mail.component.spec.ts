import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBaseMailComponent } from './add-base-mail.component';

describe('AddBaseMailComponent', () => {
  let component: AddBaseMailComponent;
  let fixture: ComponentFixture<AddBaseMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBaseMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBaseMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
