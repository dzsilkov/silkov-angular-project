import {Component, OnDestroy, OnInit} from '@angular/core';
import {SportBase} from "../../../models/sport-base";
import {map, pluck, tap} from "rxjs/operators";
import {Observable} from "rxjs/internal/Observable";
import {DataBaseService} from "../../../services/data-base.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-base-catalog',
  templateUrl: './base-catalog.component.html',
  styleUrls: ['./base-catalog.component.css']
})

export class BaseCatalogComponent implements OnDestroy, OnInit{
  sportBases$: SportBase[];
  constructor(
    private baseService: DataBaseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getSportBases()
  }

  getSportBases(): void {
    this.baseService.getSportBases()
      .subscribe((bases: SportBase[]) => {
          this.sportBases$ = bases;
        },
        err => {
          console.error(`An error occurred: ${err.message}`);
        }
      );
  }
  ngOnDestroy(): void {
  }

}
