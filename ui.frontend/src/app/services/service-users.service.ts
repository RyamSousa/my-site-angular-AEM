import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceUsersService {

  constructor(private http: HttpClient) { }

  readonly url = 'https://api.github.com/users/';

  async getUser(name: string): Promise<User>{
    return this.http.get<User>(`${this.url}${name}`).toPromise();
  }
}
