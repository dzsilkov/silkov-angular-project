import {Routes} from "@angular/router";

import {AuthGuard} from "../../auth/auth.guard";
import {SportBasesCatalogComponent} from "../components/sport-bases-catalog/sport-bases-catalog.component";
import {SportBaseEditComponent} from "../components/sport-base-edit/sport-base-edit.component";
import {AddSportBaseComponent} from "../components/add-sport-base/add-sport-base.component";
import {SportBaseDetailComponent} from "../components/sport-base-detail/sport-base-detail.component";
import {SearchSportBaseComponent} from "../components/search-sport-base/search-sport-base.component";
import {SportBasesAppComponent} from "../components/sport-bases-app/sport-bases-app.component";
import {SportBaseDetailResolve} from "../components/sport-base-detail/sport-base-detail-resolve";

export const sportBasesRoutes: Routes = [
  {
    path: '',
    component: SportBasesAppComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: SportBasesCatalogComponent,
        data: {breadcrumb: 'Каталог'},
        // resolve: {sportBases: SportBasesResolve}
        },
      {
        path: 'add-base',
        component: AddSportBaseComponent,
        data: {breadcrumb: 'Добавить базу'},
        canActivate: [AuthGuard]
      },
      {
        path: 'search-base',
        component: SearchSportBaseComponent,
        data: {breadcrumb: 'найти базу'},
        // canActivate: [AuthGuard]
      },
      {
        path: ':id',
        component: SportBaseDetailComponent,
        data: {breadcrumb: `Каталог`},
        // resolve: {sportBase: SportBaseDetailResolve},
      },
      {
        path: ':id/edit',
        component: SportBaseEditComponent,
        data: {breadcrumb: `Edit`},
      }
    ]
  }
];
