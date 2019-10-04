import {Component} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {IUser} from '../../model/user';
import {Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {AlertService} from '../../service/alert.service';
import {AuthenticationService} from '../../service/authentication.service';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {

  uploader = new FileUploader({url: URL});
  hasBaseDropZoneOver = false;
  hasAnotherDropZoneOver = false;
  saveSuccess = false;
  info: IUser;

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  constructor(private router: Router,
              private userService: UserService,
              private alertService: AlertService,
              private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.info = x);
  }

  public save() {
    this.userService.register(this.info).subscribe(success => {
        if (success) {
          this.saveSuccess = true;
          this.alertService.success('Success Thanks! Profile updated.', true);
          this.router.navigateByUrl('/');
        } else {
          this.alertService.error('Error Problem updating profile.');
        }
      },
      error => {
        this.alertService.error('Error', error);
      });
  }
}
