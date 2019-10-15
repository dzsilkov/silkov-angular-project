import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";


import { NotFoundComponent} from "../not-found/not-found.component";
import { DashBoardComponent} from "../dashboard/dashboard.component";

export const appRoutes: Routes = [
  {path: '', component: DashBoardComponent, data: { bc: 'Главная' }},
  // {path: 'contacts', component: ContactsComponent, data: { bc: 'Контакты' }},
  // {path: 'add-base', component: AddBaseComponent, data: { bc: 'Добавить базу' }},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    NotFoundComponent,
    DashBoardComponent,
  ],

  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
    NotFoundComponent,
    DashBoardComponent,
  ]

})
export class AppRoutingModule { }
