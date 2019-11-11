import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {AngularFireAuthModule} from "angularfire2/auth";
import {environment} from "../../environments/environment";
import {FlashMessagesModule, FlashMessagesService} from "angular2-flash-messages";
import {ArticleStoreService} from "../articles/services/article-store.service";
import {ArticleFirestoreService} from "../articles/services/article-firestore.service";
import {ArticlesService} from "../articles/services/articles.service";
import {AppStore} from "./services/app-store";
import {UsersService} from "../auth/services/users.service";


@NgModule({
  imports: [
    CommonModule,
    FlashMessagesModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    AngularFireModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FlashMessagesModule
  ],
  providers: [
    AppStore,
    FlashMessagesService,
    UsersService,
    ArticlesService,
    ArticleStoreService,
    ArticleFirestoreService
  ],

})
export class CoreModule {
}
