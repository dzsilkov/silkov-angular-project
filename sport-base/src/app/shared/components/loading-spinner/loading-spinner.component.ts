import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../auth/services/user.service";
import {ArticlesService} from "../../../articles/services/articles.service";

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {

  active: boolean;

  constructor(
    private userService: UserService,
    private baseService: UserService,
    private articleService: ArticlesService,
  ) {
  }

  ngOnInit() {
    this.userService.loading$.subscribe(data => this.active = data);
    this.baseService.loading$.subscribe(data => this.active = data);
    this.articleService.loading$.subscribe(data => this.active = data);
  }

}
