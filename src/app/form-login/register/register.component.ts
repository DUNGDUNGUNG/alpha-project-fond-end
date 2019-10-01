import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  message: string;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  createUser(registerForm) {
    console.log(registerForm.value);
    this.userService.createUser(registerForm.value).subscribe(() => {
      this.message = 'Created user successfully!';
    }, error => {
      this.message = 'error';
    });
  }

}
