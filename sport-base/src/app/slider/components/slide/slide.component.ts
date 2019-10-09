import {Component, OnInit, Input, OnChanges, SimpleChange} from '@angular/core';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  @Input()
  slide;
  constructor() { }

  ngOnInit() {
  }
}
