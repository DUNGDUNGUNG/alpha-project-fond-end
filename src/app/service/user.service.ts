import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpClient: HttpClient) {
  }

  getList(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>('/users');
  }

  register(user: IUser) {
    return this.httpClient.post<any>('/register', user);
  }

  getDetail(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(`/users/${id}`);
  }

  delete(id: number) {
    return this.httpClient.delete('/users/' + id);
  }

  edit(id: number, user: IUser): Observable<any> {
    return this.httpClient.put('/books/' + id, user);
  }
}
