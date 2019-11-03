import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {SportBase} from "../../../models/sport-base";
import {DataBaseService} from "../../../services/data-base.service";


@Injectable()
export class SportBaseDetailResolve implements Resolve<SportBase> {
  constructor(private baseService: DataBaseService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.baseService.getSportBase(route.paramMap.get('id'));
  }
}
