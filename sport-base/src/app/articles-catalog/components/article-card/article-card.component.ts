import { Component, OnInit, Input } from '@angular/core';
import {Article} from "../../models/article";

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  @Input()
  article: Article;

  constructor() { }

  ngOnInit() {
  }

}
