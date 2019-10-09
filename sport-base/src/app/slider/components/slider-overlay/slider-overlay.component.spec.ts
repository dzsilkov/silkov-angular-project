import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderOverlayComponent } from './slider-overlay.component';

describe('SliderOverlayComponent', () => {
  let component: SliderOverlayComponent;
  let fixture: ComponentFixture<SliderOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
