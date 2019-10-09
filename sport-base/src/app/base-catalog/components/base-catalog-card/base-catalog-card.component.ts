import { Component, OnInit, Input } from '@angular/core';
import {SportBase} from '../../models/sport-base';

@Component({
  selector: 'app-base-catalog-card',
  templateUrl: './base-catalog-card.component.html',
  styleUrls: ['./base-catalog-card.component.css']
})

export class BaseCatalogCardComponent implements OnInit {

@Input()
private sportBase: SportBase;

  constructor() { }

  ngOnInit() {
  }

}
