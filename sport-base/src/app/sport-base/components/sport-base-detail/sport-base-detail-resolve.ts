import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {SportBase} from "../../models/sport-base";
import {SportBasesFirestoreService} from "../../services/sport-bases-firestore.service";


@Injectable({
  providedIn: "root"
  })
export class SportBaseDetailResolve implements Resolve<SportBase> {
  constructor(private baseService: SportBasesFirestoreService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    const doc = this.baseService.doc$(route.paramMap.get('id')).toPromise();
    return doc.then(data => {
      return data
    });
  }
}
