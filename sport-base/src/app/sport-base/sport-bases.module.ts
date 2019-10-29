import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {SportBasesRoutingModule} from "./sport-bases-routing/sport-bases-routing.module";
import {SportBasesComponent} from './sport-bases/sport-bases.component';
import {SportBasesCatalogComponent} from './sport-bases-catalog/sport-bases-catalog.component';
import {SportBaseEditComponent} from './sport-base-edit/sport-base-edit.component';
import {AddSportBaseComponent} from './add-sport-base/add-sport-base.component';
import {SportBaseDetailComponent} from "./sport-base-detail/sport-base-detail.component";
import {SportBaseCatalogItemComponent} from "./components/sport-base-catalog-item/sport-base-catalog-item.component";
import {DataBaseService} from "./services/data-base.service";


@NgModule({
  declarations: [
    SportBasesComponent,
    SportBasesCatalogComponent,
    SportBaseEditComponent,
    AddSportBaseComponent,
    SportBaseDetailComponent,
    SportBaseCatalogItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SportBasesRoutingModule
  ],
  providers: [
    DataBaseService
  ]
})
export class SportBasesModule {
}
