import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {Observable} from "rxjs/internal/Observable";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  loading$: Observable<boolean>;
  noResults$: Observable<boolean>;
  activeUser$: Observable<User | any>;

  constructor(
    private userService: UsersService
  ) {
  }

  ngOnInit() {
    // this.loading$ = this.userService.loading$;
    // this.noResults$ = this.userService.noResults$;
    this.activeUser$ = this.userService.activeUser$;
  }
}
