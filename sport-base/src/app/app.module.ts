import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BackendInterceptor} from './back-end/back-end.interceptor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {FlashMessagesModule} from 'angular2-flash-messages';

import {AppComponent} from './app.component';
import {AddBaseComponent} from './add-base/add-base.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NavigationComponent} from './navigation/navigation.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {ArticlesCatalogModule} from './articles-catalog/articles-catalog.module';
import {TitleComponent} from './title/title.component';
import {FormSearchComponent} from './form-search/form-search.component';
import {ContactsComponent} from "./contacts/contacts.component";
import {HomeComponent} from "./home/home.component";
import {AddBaseFormComponent} from "./add-base/add-base-form/add-base-form/add-base-form.component";
import {LoadingSpinnerComponent} from './loading-spinner/loading-spinner.component';
import {GoTopComponent} from './go-top/go-top.component';
import {SliderModule} from "./slider/slider.module";
import {Store} from "./store";
import {LoginComponent} from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';
import {NotFoundComponent} from "./not-found/not-found.component";
import {AuthService} from "./auth/auth.service";
import {DataBaseService} from "./services/data-base.service";
import {CatalogItemComponent} from "./sport-base/components/catalog-item/catalog-item.component";
import {BaseCatalogComponent} from "./sport-base/containers/base-catalog/base-catalog.component";
import {SportBaseDetailComponent} from "./sport-base/containers/sport-base-detail/sport-base-detail.component";
import {UserService} from "./services/user.service";
import {BaseDescriptionResolve} from "./sport-base/containers/sport-base-detail/base-description-resolve";


@NgModule({
  declarations: [
    AppComponent,
    AddBaseComponent,
    AddBaseFormComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    BreadcrumbComponent,
    TitleComponent,
    FormSearchComponent,
    HomeComponent,
    ContactsComponent,
    GoTopComponent,
    LoadingSpinnerComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    BaseCatalogComponent,
    CatalogItemComponent,
    SportBaseDetailComponent
  ],

  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ArticlesCatalogModule,
    HttpClientModule,
    SliderModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FlashMessagesModule.forRoot()
  ],

  exports: [
    LoadingSpinnerComponent
  ],

  providers: [
    AuthService,
    UserService,
    DataBaseService,
    Store,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BackendInterceptor,
      multi: true
    }
  ],

  bootstrap: [AppComponent]
})

export class AppModule {
}
