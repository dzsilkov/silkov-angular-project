import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {SportBase} from "../../models/sport-base";
import {SportBasesFirestoreService} from "../../services/sport-bases-firestore.service";

@Injectable()
export class SportBasesResolve implements Resolve<SportBase[]> {
  constructor(private baseService: SportBasesFirestoreService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot
  ) {
    console.log('fekwgfwk', route);
    console.log('fwk', state);
    return this.baseService.collection$();
  }
}
