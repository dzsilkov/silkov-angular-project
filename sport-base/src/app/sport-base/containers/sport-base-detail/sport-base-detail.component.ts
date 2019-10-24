import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {delay, switchMap, tap} from "rxjs/operators";
import {SportBase} from "../../../models/sport-base";
import {SportBaseService} from "../../sport-base.service";
import {Observable} from "rxjs/internal/Observable";
import {SportBaseStoreService} from "../sport-base-store.service";
import {DataBaseService} from "../../../services/data-base.service";

@Component({
  selector: 'app-sport-base-detail',
  templateUrl: './sport-base-detail.component.html',
  styleUrls: ['./sport-base-detail.component.css']
})

export class SportBaseDetailComponent implements OnInit {
  @Input()
  sportBase: SportBase;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private baseService: DataBaseService,
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: any) => {
           console.log('params', params);
          return this.baseService.getSportBase(params.get('id'))
        }),
        tap(console.log),
        delay(4000)
      )
      .subscribe((data: SportBase) => {
        console.log('base-data', data);
        this.sportBase = data;
        console.log('base', this.sportBase);
      });
  }
}
