import {Component, OnInit} from '@angular/core';
import {Slide} from "../../models/slide";
import {Observable} from "rxjs/internal/Observable";
import {DashboardService} from "../../services/dashboard.service";
import {concatMap, delay, repeat, tap} from "rxjs/operators";
import {interval} from "rxjs/internal/observable/interval";
import {of} from "rxjs/internal/observable/of";
import {from} from "rxjs/internal/observable/from";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit {
  loading$: Observable<boolean>;
  slides$: Observable<Slide[]>;
  noResults$: Observable<boolean>;
  slides;
  slide;

  constructor(
    private sliderService: DashboardService
  ) {}

  ngOnInit() {
    this.loading$ = this.sliderService.loading$;
    this.noResults$ = this.sliderService.noResults$;
    this.sliderService.slides$.pipe(
    ).subscribe(
      slides => {
        console.log('slide', slides);
        this.slides = slides;
        console.log('slides', this.slides);
      }
    );

    this.slide =  from(this.slides).pipe(
      concatMap(val => {
        return of(val).pipe(
          delay(4000)
        )
      }),
      repeat()
    )
  }
}
