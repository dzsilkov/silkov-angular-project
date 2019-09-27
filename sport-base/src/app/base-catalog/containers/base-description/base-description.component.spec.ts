import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDescriptionComponent } from './base-description.component';

describe('BaseDescriptionComponent', () => {
  let component: BaseDescriptionComponent;
  let fixture: ComponentFixture<BaseDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
