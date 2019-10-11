import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBaseNameComponent } from './add-base-name.component';

describe('AddBaseNameComponent', () => {
  let component: AddBaseNameComponent;
  let fixture: ComponentFixture<AddBaseNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBaseNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBaseNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
