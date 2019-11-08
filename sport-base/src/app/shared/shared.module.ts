import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {GoTopComponent} from "./components/go-top/go-top.component";
import {LoadingSpinnerComponent} from "./components/loading-spinner/loading-spinner.component";
import {FooterComponent} from "./components/footer/footer.component";
import {TitleComponent} from "./components/title/title.component";
import {AuthService} from "../auth/auth.service";
import {DataBaseService} from "../services/data-base.service";
import {UserService} from "../auth/services/user.service";
import {HeaderComponent} from "./components/header/header.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {BreadcrumbComponent} from "./components/breadcrumb/breadcrumb.component";
import {SliderPaginationComponent} from "./components/slider-pagination/slider-pagination.component";
import {SliderComponent} from "./components/slider/slider.component";
import {SlideComponent} from "./components/slide/slide.component";
import {SliderControlComponent} from "./components/slider-control/slider-control.component";
import {ExtrasServicesComponent} from "./components/extras-services/extras-services.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";


@NgModule({
  declarations: [
    GoTopComponent,
    LoadingSpinnerComponent,
    FooterComponent,
    TitleComponent,
    HeaderComponent,
    NavigationComponent,
    BreadcrumbComponent,
    DashboardComponent,
    SliderComponent,
    SliderPaginationComponent,
    SliderControlComponent,
    SlideComponent,
    ExtrasServicesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    GoTopComponent,
    LoadingSpinnerComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    BreadcrumbComponent,
  ],
  providers: [
    AuthService,
    UserService,
    DataBaseService,
  ],

})
export class SharedModule {
}
