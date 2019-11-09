import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {Observable} from "rxjs/internal/Observable";
import {User} from "../../../auth/models/user";
import {UserService} from "../../../auth/services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loading$: Observable<boolean>;
  noResults$: Observable<boolean>;
  isLoggedIn: boolean;
  activeUser$: Observable<User | any>;

  constructor(
    private userService: UserService,
    private router: Router,
    // private flashMessage: FlashMessagesService,
  ) {
  }

  ngOnInit() {
    this.loading$ = this.userService.loading$;
    this.noResults$ = this.userService.noResults$;
    this.activeUser$ = this.userService.activeUser$;
    this.userService.isLoggedIn$.subscribe(data => this.isLoggedIn = data);
  }

  logoutClick(e) {
    this.userService.logOut();
    e.preventDefault();
    // this.flashMessage.show('You are now logged out', {
    //   cssClass: 'alert-success', timeout: 4000
    // });
    this.router.navigate(['']);
  }
}
