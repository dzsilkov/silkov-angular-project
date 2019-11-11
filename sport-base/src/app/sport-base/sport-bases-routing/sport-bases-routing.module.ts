import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {sportBasesRoutes} from "./sport-bases-routes";
import {SportBasesResolve} from "../components/sport-bases-catalog/sport-bases.resolve";

@NgModule({
  imports: [
    RouterModule.forChild(sportBasesRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    SportBasesResolve
  ]
})
export class SportBasesRoutingModule {
}
