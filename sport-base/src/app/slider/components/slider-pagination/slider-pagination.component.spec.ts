import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPaginationComponent } from './slider-pagination.component';

describe('SliderPaginationComponent', () => {
  let component: SliderPaginationComponent;
  let fixture: ComponentFixture<SliderPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
