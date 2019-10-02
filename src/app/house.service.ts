import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {House} from './house';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {
  }
  getListRealtime(): Observable<House[]> {
    const url = `${this.apiUrl}/houses`;
    return this.httpClient.get<House[]>(url);
  }
}
