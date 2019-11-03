import {Component, OnInit} from '@angular/core';
import {SportBase} from "../../../models/sport-base";
import {Observable} from "rxjs/internal/Observable";
import {FacadeSportBaseService} from "../../services/facade-sport-base.service";
import {Subscription} from "rxjs/internal/Subscription";
import {DataBaseService} from "../../../services/data-base.service";
import {Store} from "../../store";
import {debounce, debounceTime, distinctUntilChanged, filter, takeWhile, tap} from "rxjs/operators";

@Component({
  selector: 'app-sport-bases-catalog',
  templateUrl: './sport-bases-catalog.component.html',
  styleUrls: ['./sport-bases-catalog.component.css']
})
export class SportBasesCatalogComponent implements OnInit {
  sportBases$: Observable<SportBase[]>;
  subscription: Subscription;

  constructor(
    private facade: FacadeSportBaseService,
    private baseService: DataBaseService,
    private store: Store
  ) {}

  ngOnInit() {
    this.subscription = this.store.select('sportBases').subscribe();
    // this.sportBases$ = this.store.select('sportBases');
    this.sportBases$ = this.baseService.getSportBases();
    // this.facade.getSportBases();
    // this.sportBases$ = this.store.select('sportBases').pipe(
    //   tap(console.log)
    // );
    // // this.subscription = this.baseService.getSportBases().subscribe();
    //
    // console.log('bases', this.sportBases$)
  }

  getSportBases() {

  }
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
