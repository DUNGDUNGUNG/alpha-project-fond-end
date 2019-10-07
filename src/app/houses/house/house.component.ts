import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {
  private displayName: string;
  private photoURL: string;
  private email: string;

  constructor(private authService: AuthService, private router: Router) {
    this.displayName = localStorage.getItem('displayName');
    this.photoURL = localStorage.getItem('photoURL');
    this.email = localStorage.getItem('email');
  }

  ngOnInit() {
  }

  newHouse() {
    this.router.navigate(['/houses/new-house']);
  }

}
