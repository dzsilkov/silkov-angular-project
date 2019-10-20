import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
slides = [
  './../../../assets/slider-1.jpg',
  './../../../assets/slider-2.jpg',
  './../../../assets/slider-3.jpg',
  './../../../assets/slider-4.jpg',
  './../../../assets/slider-5.jpg',
  './../../../assets/slider-6.jpg',
  './../../../assets/slider-7.jpg',
  './../../../assets/slider-8.jpg',
  './../../../assets/slider-9.jpg',
];
@Input()
slide = '\'./../../../assets/slider-4.jpg\'';

currentSlide = 0;

@Output() dataToChild = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    this.faredSlide();
  }

  faredSlide() {
    setInterval(() => {
      this.dataToChild.emit(this.slides[this.currentSlide]);
      // console.log(this.slides[this.currentSlide]);
      this.currentSlide++;
      if (this.currentSlide >= this.slides.length) { this.currentSlide = 0; }
      this.slide = this.slides[this.currentSlide];
    }, 4000);
}



}
