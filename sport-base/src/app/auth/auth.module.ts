import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import {SharedModule} from "../shared/shared.module";

import {SignupComponent} from "./components/signup/signup.component";
import {LoginComponent} from "./components/login/login.component";



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule
  ]
})
export class AuthModule {
}
