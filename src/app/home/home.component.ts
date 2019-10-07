import {Component, OnInit} from '@angular/core';
import {IUser} from '../model/user';
import {UserService} from '../service/user.service';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading = false;
  currentUser: IUser;

  constructor(private userService: UserService,
              private router: Router,
              private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x)};

  ngOnInit() {
    this.loading = true;
    this.userService.getDetail(this.currentUser.id).pipe(first()).subscribe(users => {
      this.loading = false;
      this.currentUser = users;
    });
  }


  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/user/login']);
  }
}
