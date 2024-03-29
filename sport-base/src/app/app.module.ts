import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";

import {AppRoutingModule} from "./app-routing/app-routing.module";
import {FlashMessagesModule} from 'angular2-flash-messages';

import {AppComponent} from './app.component';
import {NotFoundComponent} from "./not-found/not-found.component";
import {AuthService} from "./auth/services/auth.service";
import {UserFirestoreService} from "./auth/services/user-firestore.service";
import {UserStoreService} from "./auth/services/user-store.service";
import {SlidesFirestoreService} from "./dashboard/services/slides-firestore.service";
import {DashboardStore} from "./dashboard/services/dashboard-store";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    FlashMessagesModule.forRoot(),
  ],

  providers: [
    AuthService,
    UserFirestoreService,
    UserStoreService,
    SlidesFirestoreService,
    DashboardStore
  ],

  bootstrap: [AppComponent]
})

export class AppModule {
}
