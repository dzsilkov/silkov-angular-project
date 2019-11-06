import {Comment} from "./comment";

export interface SportBase {
  id?: string,
  name?: string,
  logo?: string,
  price?: string,
  country?: string,
  region?: string,
  meals?: string,
  accommodation?: string,
  description?: string,
  infrastructureBasic?: string,
  infrastructureAdditional?: string,
  infrastructureOther?: string,
  sports?: string[],
  images?: string[],
  positiveComments?: Comment[],
  negativeComments?: Comment[],
}
