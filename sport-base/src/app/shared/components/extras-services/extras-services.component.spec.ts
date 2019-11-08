import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrasServicesComponent } from './extras-services.component';

describe('ExtrasServicesComponent', () => {
  let component: ExtrasServicesComponent;
  let fixture: ComponentFixture<ExtrasServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtrasServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtrasServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
