import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import { Router } from '@angular/router';
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../services/user.service";

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
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    // private flashMessage: FlashMessagesService
  ) {}

  onSubmit() {
    this.authService.signup(this.signup.value.email, this.signup.value.password)
      .then(res => {
        this.signup.patchValue({
          id: this.generateId(),
          admin: false,
        });
        this.userService.create(this.signup.value);
        console.log('signup', this.signup.value);
        this.clear();
        // this.flashMessage.show('You are now registered and logged in', {
        //   cssClass: 'alert-success', timeout: 4000
        // });
        this.router.navigate(['']);
      })
      .catch(err => {
        this.clear();
        // this.flashMessage.show(err.message, {
        //   cssClass: 'alert-danger', timeout: 4000
        // });
      });
  }

  clear() {
    this.signup.reset();
  }


  showHidePassword() {
    this.type = this.type === "password" ? "text" : "password";
  }

  generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
