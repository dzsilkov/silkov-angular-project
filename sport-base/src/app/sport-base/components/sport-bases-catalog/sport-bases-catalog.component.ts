import {Component, OnInit} from '@angular/core';
import {SportBase} from "../../models/sport-base";
import {Observable} from "rxjs/internal/Observable";
import {Subscription} from "rxjs/internal/Subscription";
import {SportBasesService} from "../../services/sport-bases.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sport-bases-catalog',
  templateUrl: './sport-bases-catalog.component.html',
  styleUrls: ['./sport-bases-catalog.component.css']
})
export class SportBasesCatalogComponent implements OnInit {
  // sportBases$: Observable<SportBase[]>;
  subscription: Subscription;
  // filtered: boolean;

  loading$: Observable<boolean>;
  sportBases$: Observable<SportBase[]>;
  noResults$: Observable<boolean>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private baseService: SportBasesService,
  ) {}

  ngOnInit() {
    // this.route.data.subscribe(
    //   data => {
    //     console.log('sport', data)
    //   }
    // );
    this.loading$ = this.baseService.loading$;
    this.noResults$ = this.baseService.noResults$;
    this.sportBases$ = this.baseService.sportBases$;

    // this.subscription = this.store.select('sportBases').subscribe();
    // this.sportBases$ = this.store.select('sportBases');
    // this.sportBases$ = this.baseService.getSportBases();
  }

  // filterByCountry(str: string) {
  //   console.log(str);
  //   this.sportBases$.pipe(
  //     tap(console.log),
  //     filter(base => base.country.includes(str)),
  //     tap(console.log)
  //   )
  // }

  filterBy(country: string | null) {
    // console.log('pr-country', country);
    // this.baseService.countryFilter$.next(country);
  }

  filterByCountry(country: string | null) {
    // this.filtered = true;
    // console.log('pr-country', country);
    // this.baseService.countryFilter$.next(country);
  }

  filterByRegion(region: string | null) {
    // this.filtered = true;
    // console.log('pr-region', region);
    // this.baseService.regionFilter$.next(region);
  }

  filterClear() {
    // this.filtered = false;
    // this.baseService.regionFilter$.next(null);
    // this.baseService.countryFilter$.next(null);
  }

  filterBySport(sport: string | null) {
    // this.sportFilter$.next(sport);
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}

