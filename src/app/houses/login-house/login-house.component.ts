import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-house',
  templateUrl: './login-house.component.html',
  styleUrls: ['./login-house.component.scss']
})
export class LoginHouseComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  loginGoogle() {
    this.authService.loginWithGoogle().then((data) => {
      this.router.navigate(['/houses']);
    });
  }

  loginFacebook() {
    this.authService.loginWithFacebook().then((data) => {
      this.router.navigate(['/houses']);
    });
  }

  loginTwitter() {
    this.authService.loginWithTwitter().then((data) => {
      this.router.navigate(['/houses']);
    });
  }

  loginGitHub() {
    this.authService.loginWithGitHub().then((data) => {
      this.router.navigate(['/houses']);
    });
  }

}
