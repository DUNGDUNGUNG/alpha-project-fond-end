import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message: string;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  loginUser(loginForm) {
    console.log(loginForm.value);
    this.userService.login(loginForm.value).subscribe(() => {
      this.message = 'user login successfully!';
    }, error => {
      this.message = 'error hh';
    });
  }

}
