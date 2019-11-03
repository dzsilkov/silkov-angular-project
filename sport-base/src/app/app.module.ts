import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {FlashMessagesModule} from 'angular2-flash-messages';

import {AppComponent} from './app.component';
import {ContactsComponent} from "./contacts/contacts.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AuthService} from "./auth/auth.service";
import {UserService} from "./services/user.service";
import {DataBaseService} from "./services/data-base.service";
import {Store} from "./sport-base/store";
import {FacadeSportBaseService} from "./sport-base/services/facade-sport-base.service";

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    NotFoundComponent,
  ],

  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
    FlashMessagesModule.forRoot()
  ],

  exports: [
  ],

  providers: [
    AuthService,
    UserService,
    Store,
    DataBaseService,
    FacadeSportBaseService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: BackendInterceptor,
    //   multi: true
    // },
  ],

  bootstrap: [AppComponent]
})

export class AppModule {
}
