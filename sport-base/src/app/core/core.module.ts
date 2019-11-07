import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {AngularFireAuthModule} from "angularfire2/auth";
import {environment} from "../../environments/environment";


@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    AngularFireModule,
    AngularFirestoreModule,
    ReactiveFormsModule
  ]
})
export class CoreModule {
}
