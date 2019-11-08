import {Component, OnInit} from '@angular/core';
import {Slide} from "../../models/slide";
import {from} from "rxjs/internal/observable/from";
import {concatMap, delay, repeat, switchMap, takeWhile, tap} from "rxjs/operators";
import {of} from "rxjs/internal/observable/of";
import {Observable} from "rxjs/internal/Observable";
import {SliderService} from "./slider.service";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit {
  slides$: Slide[];
  slide;
  constructor(
    private sliderService: SliderService
  ) {}

  ngOnInit() {
    this.sliderService.getSlides().subscribe(
      slides => {
        console.log('slid', slides);
        this.slides$ = slides;
        console.log('slides', this.slides$)
      }
    );
    this.slide =  from(this.slides$).pipe(
      concatMap(val => {
        return of(val).pipe(
          delay(4000)
        )
      }),
      repeat()
    )
  }
}
