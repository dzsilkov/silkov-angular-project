import {Component, Input, OnInit} from '@angular/core';
import {Slide} from "../../models/slide";

@Component({
  selector: 'app-slider-pagination',
  templateUrl: './slider-pagination.component.html',
  styleUrls: ['./slider-pagination.component.css']
})
export class SliderPaginationComponent implements OnInit {

  @Input()
  slides: Slide[];
  constructor() { }

  ngOnInit() {
  }
  goToSlide(slide) {
    console.log(slide);
  }
}
