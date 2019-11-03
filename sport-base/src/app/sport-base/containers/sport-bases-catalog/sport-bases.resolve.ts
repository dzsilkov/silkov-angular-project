import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {SportBase} from "../../../models/sport-base";
import {FacadeSportBaseService} from "../../services/facade-sport-base.service";

@Injectable({
  providedIn: "root"
})
export class SportBasesResolve implements Resolve<SportBase[]> {
  constructor(private baseService: FacadeSportBaseService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.baseService.getSportBases();
  }
}
