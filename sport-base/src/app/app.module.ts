import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {FlashMessagesModule} from 'angular2-flash-messages';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NavigationComponent} from './navigation/navigation.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {ArticlesCatalogModule} from './articles-catalog/articles-catalog.module';
import {TitleComponent} from './title/title.component';
import {ContactsComponent} from "./contacts/contacts.component";
import {HomeComponent} from "./home/home.component";
import {SliderModule} from "./slider/slider.module";
import {Store} from "./store";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AuthService} from "./auth/auth.service";
import {UserService} from "./services/user.service";
import {DataBaseService} from "./sport-base/services/data-base.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    BreadcrumbComponent,
    TitleComponent,
    HomeComponent,
    ContactsComponent,
    NotFoundComponent,
  ],

  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    ArticlesCatalogModule,
    HttpClientModule,
    SliderModule,
    FormsModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot()
  ],

  exports: [
  ],

  providers: [
    AuthService,
    UserService,
    Store,
    DataBaseService
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
