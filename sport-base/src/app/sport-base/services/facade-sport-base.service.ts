import { Injectable } from '@angular/core';
import {DataBaseService} from "../../services/data-base.service";
import {SportBase} from "../../models/sport-base";
import {Store} from "../store";
import {Subscription} from "rxjs/internal/Subscription";



@Injectable({
  providedIn: 'root'
})
export class FacadeSportBaseService {
  subscription: Subscription;
  constructor(
    private baseService: DataBaseService,
    private state: Store
  ) {}
  getSportBases() {
    this.subscription = this.baseService.getSportBases().subscribe();
    // return this.state.select('sportBases');
  }

  getSportBase(id: string) {
    // this.state.select(id);
  }

  addSportBase(base: SportBase): void {
    this.baseService.newSportBase(base);
  }

  editSportBase(base: SportBase): void {
    this.baseService.updateSportBase(base);
  }

  deleteSportBase(base: SportBase) {
    this.baseService.deleteSportBase(base);
  }

  searchSportBase(str: string) {
    this.baseService.searchSportBase(str);
  }
}
