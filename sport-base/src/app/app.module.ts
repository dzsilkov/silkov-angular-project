
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BackendInterceptor } from './back-end/back-end.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppRoutingModule} from "./app-routing/app-routing.module";
import { environment} from "../environments/environment";


import { BaseCatalogModule } from './base-catalog/base-catalog-module';
import { AppComponent } from './app.component';
import { AddBaseComponent } from './add-base/add-base.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ArticlesCatalogModule } from './articles-catalog/articles-catalog.module';
import { SliderModule } from './slider/slider.module';
import { TitleComponent } from './title/title.component';
import { FormSearchComponent } from './form-search/form-search.component';
import { FormInputComponent } from './form-search/components/form-input/form-input.component';
import { ContactsComponent} from "./contacts/contacts.component";
import { HomeComponent} from "./home/home.component";
import { AddBaseFormComponent} from "./add-base/add-base-form/add-base-form/add-base-form.component";



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
    FormInputComponent,
    HomeComponent,
    ContactsComponent,
  ],

  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BaseCatalogModule,
    ArticlesCatalogModule,
    HttpClientModule,
    SliderModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],

  exports: [
  ],

  providers: [
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
