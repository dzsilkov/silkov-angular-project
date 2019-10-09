import { ok } from './helpers';

import { sportBases } from './data/sport-bases/sportBases';
import { articles } from './data/articles/articles';
import {SportBase} from '../base-catalog/models/sport-base';
import {Article} from '../articles-catalog/models/article';


export function getSportBases() {
  return ok<SportBase[]>(sportBases);
}

export function getBaseById(baseId: number) {
  const discoveredBase = sportBases.find(base => base.id === baseId);
  return ok(discoveredBase);
}

export function getArticles() {
  return ok<Article[]>(articles);
}

export function getArticle(articleId: number) {
  const discoveredArticle = articles.find(article => article.id === articleId);
  return ok(discoveredArticle);
}
