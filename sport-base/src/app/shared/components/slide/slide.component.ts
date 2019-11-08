import {Component, Input} from '@angular/core';
import {Slide} from "../../models/slide";

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent {
  @Input()
  slide: Slide;
}
