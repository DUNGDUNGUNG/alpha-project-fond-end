import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  message: string;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  createUser(registerForm) {
    console.log(registerForm.value);
    this.authenticationService.register(registerForm.value).subscribe(() => {
      this.message = 'Created user successfully!';
    }, error => {
      this.message = 'error';
    });
  }

}
