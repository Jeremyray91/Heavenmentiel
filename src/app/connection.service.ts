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
  url : string = "http://localhost:8080/heavenmentiel/authenticate";

  constructor(private http : HttpClient) {
    this.myConnect = new ConnectionBean("","");
  }



  //redirection angular : location router path

  connect(connection : ConnectionBean)
  {
    console.log("ici");
    //console.log(this.http.post<ConnectionBean>(this.url,connection));
    return this.http.post<HttpResponse<any>>(this.url + "?username=" + connection.username + "&password=" + connection.password,null);
    //return this.http.post<User>(this.url,connection).pipe(catchError(this.handleError('connect',connection)));
  }

}
