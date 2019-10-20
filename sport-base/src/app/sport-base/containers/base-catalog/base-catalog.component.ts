import {Component, OnDestroy, OnInit} from '@angular/core';
import {SportBase} from "../../../models/sport-base";
import {SportBaseService} from "../../sport-base.service";
import {map, pluck, tap} from "rxjs/operators";
import {Observable} from "rxjs/internal/Observable";
import {SportBaseStoreService} from "../sport-base-store.service";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'app-base-catalog',
  templateUrl: './base-catalog.component.html',
  styleUrls: ['./base-catalog.component.css']
})

export class BaseCatalogComponent implements OnDestroy, OnInit{
  private sportBases$: SportBase[];
  subscription: Subscription;
  constructor(private baseService: SportBaseService) { }

  ngOnInit(): void {
    this.subscription = this.baseService.getBases().pipe(
      tap(console.log),
    )
      .subscribe((data: SportBase[]) => {
        this.sportBases$ = data;
        console.log(this.sportBases$);
      },
        err => {
          console.error(`An error occurred: ${err.message}`);
        }
      );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // sportBases$;
  // sportBase$: Observable<SportBase>;
  // sportBasesLoaded: boolean = false;
  // constructor(private sportBaseStore: SportBaseStoreService
  // ) {}

  // ngOnInit(){
  //   this.sportBases$ = this.sportBaseStore.getSportBases();
    // this.sportBase$ = this.sportBaseStore.getSportBase({id: 0});
    // this.sportBaseStore.sportBasesLoaded$.pipe(
    //   map(() => this.sportBasesLoaded = true)
    // )
    //   .subscribe();
  // }

  // addSportBase(sportBase: SportBase) {
  //   this.sportBaseStore.addSportBase({sportBase})
  // }
}
