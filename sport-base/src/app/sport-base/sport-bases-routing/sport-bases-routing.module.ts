import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {sportBasesRoutes} from "./sport-bases-routes";

@NgModule({
  imports: [
    RouterModule.forChild(sportBasesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SportBasesRoutingModule {
}
