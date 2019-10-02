import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {SportBase} from "../../models/sport-base";

@Component({
  selector: 'app-base-catalog-card',
  templateUrl: './base-catalog-card.component.html',
  styleUrls: ['./base-catalog-card.component.css']
})

export class BaseCatalogCardComponent implements OnInit {

@Input()
sportBase: SportBase;

@Output() open: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  baseDescription() {
    this.open.emit(this.sportBase.id);
    console.log(this.sportBase.id);
  }
}
