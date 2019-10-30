import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {SportBasesRoutingModule} from "./sport-bases-routing/sport-bases-routing.module";
import {SportBasesComponent} from './containers/sport-bases/sport-bases.component';
import {SportBasesCatalogComponent} from './components/sport-bases-catalog/sport-bases-catalog.component';
import {SportBaseEditComponent} from './components/sport-base-edit/sport-base-edit.component';
import {AddSportBaseComponent} from './components/add-sport-base/add-sport-base.component';
import {SportBaseDetailComponent} from "./components/sport-base-detail/sport-base-detail.component";
import {SportBaseCatalogItemComponent} from "./components/sport-base-catalog-item/sport-base-catalog-item.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


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
    FormsModule,
    ReactiveFormsModule,
    SportBasesRoutingModule
  ],
  providers: [
  ]
})
export class SportBasesModule {
}
