import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import {SharedModule} from "../shared/shared.module";

import {SignupComponent} from "./components/signup/signup.component";
import {LoginComponent} from "./components/login/login.component";
import {AuthRoutingModule} from "./auth-routing/auth-routing.module";
import {AuthComponent} from "./components/auth/auth.component";
import {UserComponent} from "./components/user/user.component";
import {AuthService} from "./services/auth.service";
import {UserFirestoreService} from "./services/user-firestore.service";
import {UserStoreService} from "./services/user-store.service";


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    AuthComponent,
    UserComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    AuthRoutingModule
  ],

  providers: [
    AuthService,
    UserFirestoreService,
    UserStoreService,
  ]
})
export class AuthModule {
}
