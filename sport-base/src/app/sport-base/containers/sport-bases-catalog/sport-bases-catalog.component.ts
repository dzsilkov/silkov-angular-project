import {Component, OnInit} from '@angular/core';
import {SportBase} from "../../../models/sport-base";
import {Observable} from "rxjs/internal/Observable";
import {Subscription} from "rxjs/internal/Subscription";
import {Store} from "../../store";
import {SportBaseCatalogService} from "./sport-base-catalog.service";
import {logger} from "codelyzer/util/logger";
import {filter, tap} from "rxjs/operators";

@Component({
  selector: 'app-sport-bases-catalog',
  templateUrl: './sport-bases-catalog.component.html',
  styleUrls: ['./sport-bases-catalog.component.css']
})
export class SportBasesCatalogComponent implements OnInit {
  sportBases$: Observable<SportBase[]>;
  subscription: Subscription;

  constructor(
    private baseService: SportBaseCatalogService,
    private store: Store
  ) {}

  ngOnInit() {
    this.subscription = this.store.select('sportBases').subscribe();
    // this.sportBases$ = this.store.select('sportBases');
    this.sportBases$ = this.baseService.getSportBases();
  }

  // filterByCountry(str: string) {
  //   console.log(str);
  //   this.sportBases$.pipe(
  //     tap(console.log),
  //     filter(base => base.country.includes(str)),
  //     tap(console.log)
  //   )
  // }

  // filterBy(country: string | null) {
  //   console.log('pr-country', country);
  //   this.baseService.countryFilter$.next(country);
  // }

  filterByCountry(country: string | null) {
    console.log('pr-country', country);
    this.baseService.countryFilter$.next(country);
  }

  filterByRegion(region: string | null) {
    console.log('pr-region', region);
    this.baseService.regionFilter$.next(region);
  }

  filterBySport(sport: string | null) {
    // this.sportFilter$.next(sport);
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}

