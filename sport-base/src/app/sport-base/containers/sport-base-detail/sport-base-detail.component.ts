import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap, tap} from "rxjs/operators";
import {SportBase} from "../../../models/sport-base";
import {SportBaseService} from "../../sport-base.service";
import {Observable} from "rxjs/internal/Observable";
import {SportBaseStoreService} from "../sport-base-store.service";

@Component({
  selector: 'app-sport-base-detail',
  templateUrl: './sport-base-detail.component.html',
  styleUrls: ['./sport-base-detail.component.css']
})

export class SportBaseDetailComponent implements OnInit {
  sportBase$: Observable<SportBase>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private baseService: SportBaseService,
    private sportBaseStore: SportBaseStoreService
  ) {}

  ngOnInit() {
    // this.route.paramMap
    //   .pipe(
    //     switchMap((params: any) => this.sportBaseStore.getSportBase(+params.get('id'))),
    //     tap(console.log)
    //   )
    //   .subscribe((data: SportBase) => this.sportBase$ = data[0]);
    // console.log(this.sportBase$);
  }

}
