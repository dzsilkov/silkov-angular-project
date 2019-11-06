import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {delay, pluck, switchMap, tap} from "rxjs/operators";
import {SportBase} from "../../../models/sport-base";
import {Observable} from "rxjs/internal/Observable";
import {DataBaseService} from "../../../services/data-base.service";

@Component({
  selector: 'app-sport-base-detail',
  templateUrl: './sport-base-detail.component.html',
  styleUrls: ['./sport-base-detail.component.css']
})

export class SportBaseDetailComponent implements OnInit {

  sportBase: SportBase;
  review: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private baseService: DataBaseService,
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: any) => {
          return this.baseService.getSportBase(params.get('id'))
        }),
      ).subscribe((base) => {
          this.sportBase = base;
    })
  }

  leaveComment(id: string) {
    this.review = true;
  }

  reviewEnd() {
    this.review = false;
  }
}

