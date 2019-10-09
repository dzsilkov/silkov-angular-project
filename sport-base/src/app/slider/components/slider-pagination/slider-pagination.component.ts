import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider-pagination',
  templateUrl: './slider-pagination.component.html',
  styleUrls: ['./slider-pagination.component.css']
})
export class SliderPaginationComponent implements OnInit {

  @Input()
  slides;
  constructor() { }

  ngOnInit() {
  }

}
