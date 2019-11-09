import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {GoTopComponent} from "./components/go-top/go-top.component";
import {LoadingSpinnerComponent} from "./components/loading-spinner/loading-spinner.component";
import {FooterComponent} from "./components/footer/footer.component";
import {TitleComponent} from "./components/title/title.component";
import {AuthService} from "../auth/services/auth.service";
import {DataBaseService} from "../services/data-base.service";
import {UserService} from "../auth/services/user.service";
import {HeaderComponent} from "./components/header/header.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {BreadcrumbComponent} from "./components/breadcrumb/breadcrumb.component";
import {ContactsComponent} from "./components/contacts/contacts.component";
import {FlashMessagesModule} from "angular2-flash-messages";


@NgModule({
  declarations: [
    ContactsComponent,
    GoTopComponent,
    LoadingSpinnerComponent,
    FooterComponent,
    TitleComponent,
    HeaderComponent,
    NavigationComponent,
    BreadcrumbComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlashMessagesModule.forRoot(),

  ],
  exports: [
    GoTopComponent,
    LoadingSpinnerComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    BreadcrumbComponent,
    TitleComponent,
    ContactsComponent
  ],
  providers: [
    AuthService,
    UserService,
    DataBaseService,
  ],

})
export class SharedModule {
}
