import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from "@angular/router";
import {delay, pluck, switchMap, tap} from "rxjs/operators";
import {SportBase} from "../../models/sport-base";
import {Observable} from "rxjs/internal/Observable";
import {DataBaseService} from "../../../services/data-base.service";
import {SportBaseDetailService} from "../../services/sport-base-detail.service";
import {SportBasesFirestoreService} from "../../services/sport-bases-firestore.service";
import {SportBaseDetailStore} from "../../services/sport-base-detail-store";

@Component({
  selector: 'app-sport-base-detail',
  templateUrl: './sport-base-detail.component.html',
  styleUrls: ['./sport-base-detail.component.css']
})

export class SportBaseDetailComponent implements OnInit {

  loading$: Observable<boolean>;
  sportBase$: Observable<SportBase>;
  // noResults$: Observable<boolean>;
  sports$: Observable<string[]>;
  images$: Observable<string[]>;

  // sportBase: SportBase;
  // review: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private baseService: SportBaseDetailService,

  ) {
  }

  ngOnInit() {
    // let id = this.route.snapshot.paramMap.get('id');
    // this.sportBase$ = this.baseService.doc$(id);
    this.loading$ = this.baseService.loading$;
    // this.noResults$ = this.baseService.noResults$;
    this.sportBase$ = this.baseService.sportBase$;
    this.sports$ = this.baseService.sports$;
    this.images$ = this.baseService.images$;
    this.route.paramMap
      .pipe(
        switchMap((params: any) => {
          return this.baseService.doc$(params.get('id'))
        }),
      )
  }

  // leaveComment(id: string) {
  //   this.review = true;
  // }
  //
  // reviewEnd() {
  //   this.review = false;
  // }
}

