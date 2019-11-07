import {Injectable} from '@angular/core';
import {Store} from "../../core/services/store";
import {SportBasesApp} from "../states/sport-bases-app";

@Injectable()
export class SportBasesAppStore extends Store<SportBasesApp> {
  protected store: string = 'sport-base-page';

  constructor() {
    super({
      loading: true,
      sportBases: [],
      totalSportBases: 0,
    })
  }
}
