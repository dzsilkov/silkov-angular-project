import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {switchMap, tap} from 'rxjs/operators';

import {BaseCatalogService} from "../../services/base-catalog.service";
import {SportBase} from "../../models/sport-base";


@Component({
  selector: 'app-base-description',
  templateUrl: './base-description.component.html',
  styleUrls: ['./base-description.component.css']
})

export class BaseDescriptionComponent implements OnInit {

  base: SportBase;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private baseCatalogService: BaseCatalogService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: any) => this.baseCatalogService.getBase(+params.get('id'))),
        tap(console.log)
      )
      .subscribe((data: SportBase) => this.base = data[0]);
  }

}
