import {Component, Input} from '@angular/core';
import {SportBase} from "../../../models/sport-base";

@Component({
  selector: 'app-sport-base-catalog-item',
  templateUrl: './sport-base-catalog-item.component.html',
  styleUrls: ['./sport-base-catalog-item.component.css']
})
export class SportBaseCatalogItemComponent {
  @Input()
  private sportBase: SportBase;
}
