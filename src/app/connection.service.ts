import { Injectable, Output, Input } from '@angular/core';
import { User } from './user';
import { ConnectionBean } from './connection-bean';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


const httpOptions = 
  {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json',
      'Access-Control-Allow-Origin' : '*'
    })
  }

@Injectable()
export class ConnectionService {

  myConnect : ConnectionBean;
  urlRoot : string = "http://localhost:8082/heavenmentiel/";

  userIsConnected : boolean;

  constructor(private http : HttpClient) {
    this.myConnect = new ConnectionBean("","");
  }



  //redirection angular : location router path

  connect(connection : ConnectionBean)
  {
    console.log("Connect()");
    //console.log(this.http.post<ConnectionBean>(this.url,connection));*
    return this.http.post<HttpResponse<any>>(this.urlRoot + "authenticate?username=" + connection.username + "&password=" + connection.password,null);
    //return this.http.post<User>(this.url,connection).pipe(catchError(this.handleError('connect',connection)));
  }

  disconnect()
  {
    console.log("Disconnect()");
    return this.http.post<HttpResponse<any>>(this.urlRoot + "logout", null);
  }

  getUser(connection : ConnectionBean) : Observable<User>
  {
    console.log("Start GetUser " + connection);
    console.log("isConnected : " + this.userIsConnected)
    if(this.userIsConnected)
    {
      console.log("GetUser()");
      console.log(this.http.get<User>(this.urlRoot + "user?username=" + connection.username));
      return this.http.get<User>(this.urlRoot + "user?username=" + connection.username);
    }
  }

  getStatus() : Observable<boolean>
  {
    return Observable.of(this.userIsConnected);
  }

}
