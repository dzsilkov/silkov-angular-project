import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {Observable} from "rxjs/internal/Observable";
import {User} from "../../../auth/models/user";
import {UsersService} from "../../../auth/services/users.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loading$: Observable<boolean>;
  noResults$: Observable<boolean>;
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;
  activeUser$: Observable<User | any>;

  constructor(
    private userService: UsersService,
    private router: Router,
    private flashMessage: FlashMessagesService,
  ) {
  }

  ngOnInit() {
    // this.loading$ = this.userService.loading$;
    // this.noResults$ = this.userService.noResults$;
    this.activeUser$ = this.userService.activeUser$;
    this.isLoggedIn$ = this.userService.isLoggedIn$;
    this.isLoggedOut$ = this.userService.isLoggedOut$;
  }

  logoutClick(e) {
    this.userService.logOut();
    e.preventDefault();
  }
}
