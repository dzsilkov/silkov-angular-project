import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {SportBase} from "../../models/sport-base";
import {DataBaseService} from "../services/data-base.service";
import {Observable} from 'rxjs';


@Injectable()
export class SportBaseDetailResolve implements Resolve<SportBase> {
  constructor(private baseService: DataBaseService) {}

  // resolve(route: ActivatedRouteSnapshot,
  //         state: RouterStateSnapshot) {
  //   // const id = route.params['id'];
  //   // return this.baseService.getSportBase(id);
  //   console.log(route.params.id);
  //   console.log(route);
  //   console.log(this.baseService.getSportBase(route.params.id));
  //   return this.baseService.getSportBase(route.params.id);
  // }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.baseService.getSportBase(route.paramMap.get('id'));
  }
}
