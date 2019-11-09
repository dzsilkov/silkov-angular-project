import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SportBase} from "../../models/sport-base";

@Component({
  selector: 'app-sport-base-catalog-item',
  templateUrl: './sport-base-catalog-item.component.html',
  styleUrls: ['./sport-base-catalog-item.component.css']
})
export class SportBaseCatalogItemComponent {
  @Input()
  sportBase: SportBase;

  @Output()
  filterCountry: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  filterRegion: EventEmitter<string> = new EventEmitter<string>();

  filterByCountry(country) {
    this.filterCountry.emit(country);
  }

  filterByRegion(region) {
    this.filterRegion.emit(region);
  }

  click(id) {
    console.log(id)
  }
}
