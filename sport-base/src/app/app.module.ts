import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
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
import {ContactsComponent} from "./shared/components/contacts/contacts.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AuthService} from "./auth/auth.service";
import {DataBaseService} from "./services/data-base.service";
import {SliderService} from "./shared/components/slider/slider.service";
import {UserFirestoreService} from "./auth/services/user-firestore.service";
import {UserStoreService} from "./auth/services/user-store.service";
import {UserService} from "./auth/services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    NotFoundComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
    FlashMessagesModule.forRoot()
  ],

  providers: [
    DataBaseService,
    SliderService,
    AuthService,
    UserService,
    UserFirestoreService,
    UserStoreService
  ],

  bootstrap: [AppComponent]
})

export class AppModule {
}
