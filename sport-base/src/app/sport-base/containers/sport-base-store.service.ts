import { Injectable } from '@angular/core';
import {Store} from "../../store";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class SportBaseStoreService {

  constructor(
    private store: Store
  ) { }

  getSportBases() {
    this.store.select('sportBases')
  }

  // getSportBase(id: number) {
  //   this.store.selectNameValue('sportBases', id)
  // }

  // addSportBase({sportBase}) {
  //
  // }
}
