import {SportBase} from "../models/sport-base";

export interface SportBasesApp {
  loading: boolean;
  sportBases: SportBase[];
  formStatus: string;
  formEditing: boolean;
  totalSportBases: number;
  sportBase: SportBase,
}
