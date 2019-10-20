import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {RouterModule, Routes} from "@angular/router";

const authRoutes: Routes = [
  // { path: 'signup', component: SignupComponent },
  // { path: 'login', component: SigninComponent },
];


@NgModule({
  declarations: [
    LogInComponent,
    SignUpComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes)
  ]
})
export class AuthModule { }
