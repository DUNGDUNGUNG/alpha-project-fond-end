import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpClient: HttpClient) { }

  getList(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>('/users');
  }
}
