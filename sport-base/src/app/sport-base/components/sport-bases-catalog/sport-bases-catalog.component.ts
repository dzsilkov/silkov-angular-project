import { Component, OnInit } from '@angular/core';
import {DataBaseService} from "../../../services/data-base.service";
import {ActivatedRoute} from "@angular/router";
import {SportBase} from "../../../models/sport-base";
import {Observable} from "rxjs/internal/Observable";

@Component({
  selector: 'app-sport-bases-catalog',
  templateUrl: './sport-bases-catalog.component.html',
  styleUrls: ['./sport-bases-catalog.component.css']
})
export class SportBasesCatalogComponent implements OnInit {
  sportBases$: Observable<SportBase[]>;
  constructor(
    private baseService: DataBaseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getSportBases()
  }

  getSportBases(): void {
    this.sportBases$ = this.baseService.getSportBases()
  }

  ngOnDestroy(): void {
  }

}
