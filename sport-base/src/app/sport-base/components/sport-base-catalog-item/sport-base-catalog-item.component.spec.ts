import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportBaseCatalogItemComponent } from './sport-base-catalog-item.component';

describe('SportBaseCatalogItemComponent', () => {
  let component: SportBaseCatalogItemComponent;
  let fixture: ComponentFixture<SportBaseCatalogItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportBaseCatalogItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportBaseCatalogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
