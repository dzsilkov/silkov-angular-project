import {Component, OnInit} from '@angular/core';
import {SportBase} from "../../models/sport-base";
import {Observable} from "rxjs/internal/Observable";
import {SportBasesService} from "../../services/sport-bases.service";
import {AppStore} from "../../../core/services/app-store";
import {FormBuilder, FormGroup} from "@angular/forms";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-sport-bases-catalog',
  templateUrl: './sport-bases-catalog.component.html',
  styleUrls: ['./sport-bases-catalog.component.css']
})
export class SportBasesCatalogComponent implements OnInit {
  filtered: boolean;
  sports$: Observable<string[]>;
  loading$: Observable<boolean>;
  sportBases$: Observable<SportBase[]>;
  noResults$: Observable<boolean>;
  sportsSelector: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: AppStore,
    private baseService: SportBasesService,
  ) {
  }

  ngOnInit() {
    this.sportsSelector = this.formBuilder.group({
      sports: '',
    });
    this.sportBases$ = this.baseService.sportBases$;
    this.sports$ = this.baseService.sports$.pipe(
      map(value => {
        if (value) {
          return value[0].sports;
        }
      }),
    );

    this.onChanges();
  }

  onChanges(): void {
    this.sportsSelector.get('sports').valueChanges.subscribe(sport => {
      this.filterBySport(sport);
    });
  }

  filterByCountry(country: string | null) {
    this.filtered = true;
    this.baseService.countryFilter$.next(country);
  }

  filterByRegion(region: string | null) {
    this.filtered = true;
    this.baseService.regionFilter$.next(region);
  }

  filterClear() {
    this.filtered = false;
    this.baseService.regionFilter$.next(null);
    this.baseService.countryFilter$.next(null);
    this.baseService.sportFilter$.next(null);
  }

  filterBySport(sport: string | null) {
    this.filtered = true;
    this.baseService.sportFilter$.next(sport);
  }

}

