import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';

@Injectable()
export class UserService {

  constructor(private httpClient : HttpClient) { }

  createUser(user:User):Observable<User>{
    return this.httpClient.post<User>("http://localhost:8082/heavenmentiel/user", user);
  }

  updateUser(user:User):Observable<User>{
    return this.httpClient.put<User>("http://localhost:8082/heavenmentiel/user", user);
  }

}
