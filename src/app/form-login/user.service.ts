import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getList(): Observable<IUser[]> {
    const url = `${this.apiUrl}/users`;
    return this.httpClient.get<IUser[]>(url);
  }

  createUser(user: IUser) {
    const url = this.apiUrl + '/register';
    return this.httpClient.post(url, user);
  }

  login(user: IUser) {
    const url = this.apiUrl + '/login';
    return this.httpClient.post(url, user);
  }
}
