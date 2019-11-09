import {Article} from "../models/article";

export interface ArticleApp {
  loading: boolean;
  articles: Article[];
  formStatus: string;
  totalArticles: number;
}
