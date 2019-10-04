import {Component, OnInit} from '@angular/core';
import {SportBase} from "../../models/sport-base";
import {BaseCatalogService} from "../../services/base-catalog.service";


@Component({
  selector: 'app-base-catalog',
  templateUrl: './base-catalog.component.html',
  styleUrls: ['./base-catalog.component.css']
})
export class BaseCatalogComponent implements OnInit {

  bases: SportBase[];

  constructor(private baseCatalogService: BaseCatalogService) {}

  ngOnInit() {
    this.baseCatalogService.getBases()
      .subscribe((data: SportBase[]) => this.bases = data);
    console.log(this.bases)
  }


}
