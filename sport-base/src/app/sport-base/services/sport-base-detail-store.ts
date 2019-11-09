import {Injectable} from "@angular/core";
import {Store} from "../../core/services/store";
import {SportBaseDetail} from "../states/sport-base-detail";

@Injectable()
export class SportBaseDetailStore extends Store<SportBaseDetail> {

  protected store: string = 'sport-base-detail';

  constructor() {
    super({
      loading: true,
      totalSportBases: 0,
      sportBase: {},
      totalComments: 0,
      positiveComments: 0,
      negativeComments: 0,
      sports: [],
      images: [],
    })
  }
}
