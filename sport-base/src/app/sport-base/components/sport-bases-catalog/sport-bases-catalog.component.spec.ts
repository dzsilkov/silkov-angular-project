import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportBasesCatalogComponent } from './sport-bases-catalog.component';

describe('SportBasesCatalogComponent', () => {
  let component: SportBasesCatalogComponent;
  let fixture: ComponentFixture<SportBasesCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportBasesCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportBasesCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
