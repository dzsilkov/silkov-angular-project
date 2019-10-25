import {Component, Input, OnInit} from '@angular/core';
import {SportBase} from "../../../models/sport-base";

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.css']
})
export class CatalogItemComponent {
  @Input()
  private sportBase: SportBase;
}
