import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {delay, pluck, switchMap, tap} from "rxjs/operators";
import {SportBase} from "../../models/sport-base";
import {Observable} from "rxjs/internal/Observable";
import {DataBaseService} from "../services/data-base.service";

@Component({
  selector: 'app-sport-base-detail',
  templateUrl: './sport-base-detail.component.html',
  styleUrls: ['./sport-base-detail.component.css']
})

export class SportBaseDetailComponent implements OnInit {

  // sportBase: SportBase;
  sportBase: Observable<SportBase> = this.route.data.pipe(pluck('baseDetail'));
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private baseService: DataBaseService,
  ) {}

  ngOnInit() {
    // this.route.paramMap
    //   .pipe(
    //     switchMap((params: any) => {
    //       return this.baseService.getSportBase(params.get('id'))
    //     }),
    //   )
  //   this.route.data
  //     .subscribe((data: SportBase) => this.sportBase = data
  //     );
  }

}


// message: Observable<Mail> = this.route.data.pipe(pluck('message'));
//
// constructor(private route: ActivatedRoute) {
//   console.log(this.route)
// }
