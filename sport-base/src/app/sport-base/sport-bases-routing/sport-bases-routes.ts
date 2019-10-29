import {Routes} from "@angular/router";

import {SportBaseDetailComponent} from "../sport-base-detail/sport-base-detail.component";
import {AuthGuard} from "../../auth/auth.guard";
import {SportBaseDetailResolve} from "../sport-base-detail/sport-base-detail-resolve";
import {SportBasesComponent} from "../sport-bases/sport-bases.component";
import {SportBasesCatalogComponent} from "../sport-bases-catalog/sport-bases-catalog.component";
import {SportBaseEditComponent} from "../sport-base-edit/sport-base-edit.component";
import {AddSportBaseComponent} from "../add-sport-base/add-sport-base.component";

export const sportBasesRoutes: Routes = [
  {
    path: '',
    component: SportBasesComponent,
    // canActivate: [AuthGuard],
    children: [
      {path: '', component: SportBasesCatalogComponent, data: {breadcrumb: 'Каталог'}},
      {
        path: 'add-base',
        component: AddSportBaseComponent,
        data: {breadcrumb: 'Добавить базу'},
        canActivate: [AuthGuard]
      },
      {
        path: ':id',
        component: SportBaseDetailComponent,
        data: {breadcrumb: `Каталог`},
        resolve: [SportBaseDetailResolve]
      },
      {
        path: ':id/edit',
        component: SportBaseEditComponent,
        data: {breadcrumb: `Edit`},
        resolve: [SportBaseDetailResolve]
      }
    ]
  }
];
