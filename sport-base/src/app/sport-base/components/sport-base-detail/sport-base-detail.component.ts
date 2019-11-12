import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {SportBase} from "../../models/sport-base";
import {Observable} from "rxjs/internal/Observable";
import {SportBasesService} from "../../services/sport-bases.service";

@Component({
  selector: 'app-sport-base-detail',
  templateUrl: './sport-base-detail.component.html',
  styleUrls: ['./sport-base-detail.component.css']
})

export class SportBaseDetailComponent implements OnInit {

  loading$: Observable<boolean>;
  sportBase$;
  noResults$: Observable<boolean>;

  sportBase: SportBase;
  review: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private baseService: SportBasesService,

  ) {
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: any) => {
          return this.baseService.getSportBase(params.get('id'));
        }),
      ).subscribe(data => this.sportBase$ = data)
  }

  leaveComment() {
    this.review = true;
  }

  reviewEnd($event) {
    this.review = false;
  }
}

