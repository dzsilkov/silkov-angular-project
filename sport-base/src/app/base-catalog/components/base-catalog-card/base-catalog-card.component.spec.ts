import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCatalogCardComponent } from './base-catalog-card.component';

describe('BaseCatalogCardComponent', () => {
  let component: BaseCatalogCardComponent;
  let fixture: ComponentFixture<BaseCatalogCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseCatalogCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCatalogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
