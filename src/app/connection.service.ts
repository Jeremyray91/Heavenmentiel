import { Injectable } from '@angular/core';
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
  urlRoot : string = "http://localhost:8080/heavenmentiel/";

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

  getUser(connection : ConnectionBean) : Observable<User>
  {
    console.log(connection);
    if(connection.isConnected)
    {
      console.log("GetUser()");
      return this.http.get<User>(this.urlRoot + "api?username=" + connection.username);
    }
  }

}
