import {Component, OnInit, OnDestroy} from '@angular/core';
import {Slide} from "../../models/slide";
import {Observable} from "rxjs/internal/Observable";
import {DashboardService} from "../../services/dashboard.service";
import {concatMap, delay, repeat, switchMap, tap} from "rxjs/operators";
import {interval} from "rxjs/internal/observable/interval";
import {of} from "rxjs/internal/observable/of";
import {from} from "rxjs/internal/observable/from";
import {AppStore} from "../../../core/services/app-store";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit, OnDestroy {
  // loading$: Observable<boolean>;
  slides$;
  // noResults$: Observable<boolean>;
  slides;
  slide;
  subscription: Subscription;

  constructor(
  private slidesService: DashboardService
  ) {}

  ngOnInit() {
    this.slides$ = this.slidesService.slides$;
    // this.subscription = this.sliderService.getSlides$.pipe(
    //   tap(next => this.slides = next)
    // ).subscribe();
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
