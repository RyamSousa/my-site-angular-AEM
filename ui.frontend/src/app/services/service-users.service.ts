import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import User from '../models/user.model';
import Repository from '../models/repository.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceUsersService {

  static emitEventRepositories = new EventEmitter<string>();

  readonly url = 'http://localhost:8080/usr/';
  readonly url2 = 'https://api.github.com/users/';

  httpOptions: {};

  constructor(private http: HttpClient) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.httpOptions = {
      headers
    };
  }

  async getUser(name: string): Promise<any> {
    const user = await this.http.get<User>(`${this.url}${name}`).toPromise();
    ServiceUsersService.emitEventRepositories.emit(user.login);

    return user;
  }

  async getRepositories(username: string): Promise<any> {
    return this.http.get<Repository[]>(`${this.url2}${username}/repos`, this.httpOptions).toPromise();
  }

}
