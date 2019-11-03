import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {SliderComponent} from "./containers/slider/slider.component";
import {SliderPaginationComponent} from "./components/slider-pagination/slider-pagination.component";
import {SliderControlComponent} from "./components/slider-control/slider-control.component";
import {SlideComponent} from "./components/slide/slide.component";
import {ExtrasServicesComponent} from "./components/extras-services/extras-services.component";



@NgModule({
  declarations: [
    DashboardComponent,
    SliderComponent,
    SliderPaginationComponent,
    SliderControlComponent,
    SlideComponent,
    ExtrasServicesComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
