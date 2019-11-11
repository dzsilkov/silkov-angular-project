import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  type: string = 'password';
  signup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    id: new FormControl(''),
    admin: new FormControl(''),
  });

  constructor(
    private userService: UsersService,
  ) {
  }

  onSubmit() {
    this.signup.patchValue({
      id: this.generateId(),
      admin: false,
    });
    const newUser = this.signup.value;
    this.userService.signUp(newUser);
    this.clear();
  }

  clear() {
    this.signup.reset();
  }

  showHidePassword() {
    this.type = this.type === "password" ? "text" : "password";
  }

  generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
