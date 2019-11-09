import {Component, Input, OnInit} from '@angular/core';
import {UserStoreService} from "../../../auth/services/user-store.service";
import {Store} from "../../../core/services/store";
import {UserService} from "../../../auth/services/user.service";

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
  ) {
  }

  ngOnInit() {
    // this.userService.loading$.subscribe(data => this.active = data);
    // this.baseService.loading$.subscribe(data => this.active = data);
  }

}
