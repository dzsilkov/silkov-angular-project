import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {SportBase} from "../../models/sport-base";
import {SportBasesService} from "../../services/sport-bases.service";


@Injectable({
  providedIn: "root"
  })
export class SportBaseDetailResolve implements Resolve<SportBase> {
  constructor(private baseService: SportBasesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    const id = route.paramMap.get('id');
    return this.baseService.getSportBase(id);
  }
}
