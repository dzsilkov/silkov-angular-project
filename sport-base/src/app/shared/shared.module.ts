import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GoTopComponent} from "./go-top/go-top.component";
import {LoadingSpinnerComponent} from "./loading-spinner/loading-spinner.component";
import {HeaderModule} from "../header/header.module";
import {FooterComponent} from "./footer/footer.component";
import {TitleComponent} from "./title/title.component";
import {AuthService} from "../auth/auth.service";
import {DataBaseService} from "../services/data-base.service";
import {Store} from "../sport-base/store";
import {UserService} from "../services/user.service";
import {DashboardModule} from "../dashboard/dashboard.module";


@NgModule({
  declarations: [
    GoTopComponent,
    LoadingSpinnerComponent,
    FooterComponent,
    TitleComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    DashboardModule,
  ],
  exports: [
    HeaderModule,
    GoTopComponent,
    LoadingSpinnerComponent,
    FooterComponent
  ],
  providers: [
    AuthService,
    UserService,
    Store,
    DataBaseService,
  ],

})
export class SharedModule {
}
