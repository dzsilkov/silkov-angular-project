import {User} from "../../auth/models/user";
import {Slide} from "../../dashboard/models/slide";
import {SportBase} from "../../sport-base/models/sport-base";
import {Article} from "../../articles/models/article";

export interface AppState {

  loading: boolean;
  slides: Slide[];
  totalSlides: number;
  activeSlide: Slide,
  users: User[];
  activeUser: User | any;
  formStatus: string;
  isLoggedIn: boolean;
  isAdmin: boolean,
  isLoggedOut: boolean,
  sportBases: SportBase[];
  formEditing: boolean;
  sportBase: SportBase,
  totalSportBases: number;
  totalComments: number;
  positiveComments: number;
  negativeComments: number;
  sports: string[];
  images: string[];
  articles: Article[],
  totalArticles: number,
}

