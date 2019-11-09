import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {SportBasesRoutingModule} from "./sport-bases-routing/sport-bases-routing.module";
import {SportBasesCatalogComponent} from './components/sport-bases-catalog/sport-bases-catalog.component';
import {SportBaseEditComponent} from './components/sport-base-edit/sport-base-edit.component';
import {AddSportBaseComponent} from './components/add-sport-base/add-sport-base.component';
import {SportBaseDetailComponent} from "./components/sport-base-detail/sport-base-detail.component";
import {SportBaseCatalogItemComponent} from "./components/sport-base-catalog-item/sport-base-catalog-item.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SearchSportBaseComponent} from './components/search-sport-base/search-sport-base.component';
import {SportBaseCatalogService} from "./components/sport-bases-catalog/sport-base-catalog.service";
import {SearchSportBaseService} from "./components/search-sport-base/search-sport-base.service";
import {ReviewsComponent} from './components/reviews/reviews.component';

import {SportBasesService} from './services/sport-bases.service';
import {SportBasesFirestoreService} from "./services/sport-bases-firestore.service";
import {SportBasesAppStore} from "./services/sport-bases-app-store";
import { SportBasesAppComponent } from './components/sport-bases-app/sport-bases-app.component';
import { SportBasesFormComponent } from './components/sport-bases-form/sport-bases-form.component';
import {SportBaseDetailStore} from "./services/sport-base-detail-store";
import {SportBaseDetailResolve} from "./components/sport-base-detail/sport-base-detail-resolve";

@NgModule({
  declarations: [
    SportBasesCatalogComponent,
    SportBaseEditComponent,
    AddSportBaseComponent,
    SportBaseDetailComponent,
    SportBaseCatalogItemComponent,
    SportBasesAppComponent,
    SearchSportBaseComponent,
    ReviewsComponent,
    SportBasesAppComponent,
    SportBasesFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SportBasesRoutingModule,
  ],
  providers: [
    SportBaseCatalogService,
    SearchSportBaseService,

    // SportBasesResolve,
    SportBaseDetailResolve,
    SportBasesService,
    SportBasesFirestoreService,
    SportBasesAppStore,
    SportBaseDetailStore,
  ]
})
export class SportBasesModule {
}
