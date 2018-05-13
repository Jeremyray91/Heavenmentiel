import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(private httpClient : HttpClient) { }

  async getOldPwd(userMail: string)
  {
    let user = await this.httpClient.get<User>("http://localhost:8082/heavenmentiel/user?username=" + userMail).toPromise()
    let test = user.pwd;
    console.log(user);
    console.log(test);
    return user.pwd;
  }

  createUser(user:User):Observable<User>{
    return this.httpClient.post<User>("http://localhost:8082/heavenmentiel/user", user);
  }

  updateUser(user:User, pwdChanged: boolean):Observable<User>{
    return this.httpClient.put<User>("http://localhost:8082/heavenmentiel/user?newPwd="+pwdChanged, user);
  }

  checkUserMail(mail: string) : Observable<boolean>
  {
    return this.httpClient.get<boolean>("http://localhost:8082/heavenmentiel/user"+"/check", {params: new HttpParams().set('username', mail)});
  }

}
