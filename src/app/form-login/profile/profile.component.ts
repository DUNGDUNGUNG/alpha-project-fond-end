import {Component, OnInit} from '@angular/core';
import {IUser} from '../../model/user';
import {UserService} from '../../service/user.service';
import {first} from 'rxjs/operators';
import {AuthenticationService} from '../../service/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  currentUser: IUser;

  constructor(private userService: UserService,
              private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
    this.userService.getDetail(this.currentUser.id).pipe(first()).subscribe(users => {
      this.currentUser = users;
    });
  }
}
