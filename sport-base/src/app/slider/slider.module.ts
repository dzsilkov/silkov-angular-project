import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderComponent } from './conteiners/slider/slider.component';
import { SliderPaginationComponent } from './components/slider-pagination/slider-pagination.component';
import { SliderControlComponent } from './components/slider-control/slider-control.component';
import { SlideComponent } from './components/slide/slide.component';
import { SliderOverlayComponent } from './components/slider-overlay/slider-overlay.component';
import { SliderContentComponent } from './components/slider-content/slider-content.component';
import {SliderService} from './slider.service';

@NgModule({
  declarations: [
    SliderComponent,
    SliderPaginationComponent,
    SliderControlComponent,
    SlideComponent,
    SliderOverlayComponent,
    SliderContentComponent
  ],

  imports: [
    CommonModule,
  ],

  exports: [
    SliderComponent,
    SliderPaginationComponent,
    SliderControlComponent,
    SlideComponent
  ],
  providers: [
    SliderService
  ]
})

export class SliderModule { }
