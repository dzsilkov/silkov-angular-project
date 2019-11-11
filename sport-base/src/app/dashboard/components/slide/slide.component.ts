import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent  {
  @Input()
  slides;

  slide: string = './../../../assets/slider-8.jpg';

  constructor() {
  }
}
