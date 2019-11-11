import {Component, OnInit} from '@angular/core';
import {ArticlesService} from "../../../articles/services/articles.service";
import {AppStore} from "../../../core/services/app-store";

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {

  active;

  constructor(
    private store: AppStore,
  ) {
  }

  ngOnInit() {
   this.active = this.store.select('loading');
    // this.subscription = this.sliderService.getSlides$.pipe(
    //   tap(next => this.slides = next)
    // ).subscribe();
    // this.userService.loading$.subscribe(data => this.active = data);
    // this.baseService.loading$.subscribe(data => this.active = data);
    // this.articleService.loading$.subscribe(data => this.active = data);
  }

}
