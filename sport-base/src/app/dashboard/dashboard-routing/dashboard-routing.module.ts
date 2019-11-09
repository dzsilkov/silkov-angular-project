import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";

import {DashboardComponent} from "../components/dashboard/dashboard.component";
import {AuthGuard} from "../../auth/auth.guard";

@NgModule({
  imports: [
    RouterModule.forChild([{path: '', component: DashboardComponent, canActivate: [AuthGuard]}])
  ],
  exports: [
    RouterModule
  ],
})
export class DashboardRoutingModule {
}
