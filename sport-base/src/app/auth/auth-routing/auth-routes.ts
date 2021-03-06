import {Routes} from "@angular/router";

import {LoginComponent} from "../components/login/login.component";
import {SignupComponent} from "../components/signup/signup.component";
import {AuthComponent} from "../components/auth/auth.component";
import {UserComponent} from "../components/user/user.component";

export const authRoutes: Routes = [
  {
    path: '', component: AuthComponent,
    // canActivate: [AuthGuard],
    children: [
      {path: 'login', component: LoginComponent, data: {breadcrumb: 'log in'}},
      {path: 'signup', component: SignupComponent, data: {breadcrumb: 'sign up'}},
      {path: 'user', component: UserComponent, data: {breadcrumb: 'Пользователь'}},

    ]
  }
];
