import {SportBase} from "../models/sport-base";

export interface SportBaseDetail {
  loading: boolean;
  sportBase: SportBase;
  formStatus: string;
  totalSportBases: number;
  totalComments: number;
  positiveComments: number;
  negativeComments: number;
  sports: string[];
  images: string[];
}
