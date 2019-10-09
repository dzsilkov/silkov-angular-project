import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/compiler/src/core';

@Component({
  selector: 'app-slider-control',
  templateUrl: './slider-control.component.html',
  styleUrls: ['./slider-control.component.css']
})
export class SliderControlComponent implements OnInit {
@Input()

  constructor() { }
  ngOnInit() {
  }

}
