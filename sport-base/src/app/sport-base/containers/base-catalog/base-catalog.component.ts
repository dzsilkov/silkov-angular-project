import {Component, OnDestroy, OnInit} from '@angular/core';
import {SportBase} from "../../../models/sport-base";
import {tap} from "rxjs/operators";
import {DataBaseService} from "../../../services/data-base.service";

@Component({
  selector: 'app-base-catalog',
  templateUrl: './base-catalog.component.html',
  styleUrls: ['./base-catalog.component.css']
})

export class BaseCatalogComponent implements OnDestroy, OnInit{
  private sportBases$: SportBase[];
  constructor(private baseService: DataBaseService) { }

  ngOnInit(): void {
    this.baseService.getSportBases().pipe(
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
