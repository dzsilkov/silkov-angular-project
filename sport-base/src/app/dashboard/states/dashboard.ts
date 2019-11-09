import {Slide} from "../models/slide";

export interface Dashboard {
  loading: boolean;
  slides: Slide[];
  formStatus: string;
  totalSlides: number;
  activeSlide: Slide,
}
