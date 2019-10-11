import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


import { SportBase } from '../../models/sport-base';
import {BaseCatalogService} from '../../services/base-catalog.service';

@Injectable()
class BaseDescriptionResolve implements Resolve<SportBase[]> {
  constructor(private baseService: BaseCatalogService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.baseService.getBase(route.params);
  }
}
