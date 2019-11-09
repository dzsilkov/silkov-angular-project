import {Injectable} from '@angular/core';
import {Store} from "../../core/services/store";
import {Dashboard} from "../states/dashboard";

@Injectable()
export class DashboardStore extends Store<Dashboard> {
  protected store: string = 'dashboard';

  constructor() {
    super({
      loading: true,
      slides: [],
      totalSlides: 0,
    })
  }
}
