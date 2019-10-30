import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "./containers/header/header.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {BreadcrumbComponent} from "./components/breadcrumb/breadcrumb.component";



@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    BreadcrumbComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {
}
