import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from "./dashboard-routing/dashboard-routing.module";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ExtrasServicesComponent} from "./components/extras-services/extras-services.component";
import {SliderComponent} from "./components/slider/slider.component";
import {SliderPaginationComponent} from "./components/slider-pagination/slider-pagination.component";
import {SliderControlComponent} from "./components/slider-control/slider-control.component";
import {SlideComponent} from "./components/slide/slide.component";


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
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {
}
