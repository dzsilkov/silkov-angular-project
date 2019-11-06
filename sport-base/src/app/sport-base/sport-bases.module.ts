import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {SportBasesRoutingModule} from "./sport-bases-routing/sport-bases-routing.module";
import {SportBasesCatalogComponent} from './containers/sport-bases-catalog/sport-bases-catalog.component';
import {SportBaseEditComponent} from './components/sport-base-edit/sport-base-edit.component';
import {AddSportBaseComponent} from './components/add-sport-base/add-sport-base.component';
import {SportBaseDetailComponent} from "./containers/sport-base-detail/sport-base-detail.component";
import {SportBaseCatalogItemComponent} from "./components/sport-base-catalog-item/sport-base-catalog-item.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SportBaseAppComponent } from './components/sport-base-app/sport-base-app.component';
import { SearchSportBaseComponent } from './components/search-sport-base/search-sport-base.component';
import {Store} from './store';
import {SportBaseCatalogService} from "./containers/sport-bases-catalog/sport-base-catalog.service";
import {SearchSportBaseService} from "./components/search-sport-base/search-sport-base.service";

@NgModule({
  declarations: [
    SportBasesCatalogComponent,
    SportBaseEditComponent,
    AddSportBaseComponent,
    SportBaseDetailComponent,
    SportBaseCatalogItemComponent,
    SportBaseAppComponent,
    SearchSportBaseComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SportBasesRoutingModule,

  ],
  providers: [
    Store,
    SportBaseCatalogService,
    SearchSportBaseService
  ]
})
export class SportBasesModule {
}
