import {Component, OnInit} from '@angular/core';
import {IUser} from '../form-login/user';
import {UserService} from '../form-login/user.service';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AuthenticationService} from '../form-login/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading = false;
  users: IUser[];
  currentUser: IUser;

  constructor(private userService: UserService,
              private router: Router,
              private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x)} ;

  ngOnInit() {
    this.loading = true;
    this.userService.getList().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });
  }


  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/user/login']);
  }

}
