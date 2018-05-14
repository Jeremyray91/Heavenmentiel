import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Command } from './command';

@Injectable()
export class CommandService {

  constructor(private httpClient : HttpClient) {}
  
  getMultiCriteria(firstname:string,lastname:string,idClient:number, datemin:Date, datemax:Date, page:number):Observable<Array<Command>>{
    let params = new HttpParams();
    let options = {year: "numeric", month: "2-digit", day: "2-digit"};

    if(firstname!=null)
      params = params.set('firstname', firstname);
    if(lastname!=null)
      params = params.set('lastname', lastname);
    if(datemin!=null)
      params = params.set('datemin',datemin.toLocaleString('en-GB',options));
    if(datemax!=null)
      params = params.set('datemax',datemax.toLocaleString('en-GB',options));
    if(idClient!=null)
      params = params.set('id',idClient.toString());
    if(page!=null)
      params = params.set('page',page.toString());
    return this.httpClient.get("http://localhost:8082/heavenmentiel/api/commands/multicriteria",{params : params}) as Observable<Array<Command>>;
  }

  getById(id:number) : Observable<Command>{
    return this.httpClient.get("http://localhost:8082/heavenmentiel/api/commands/getById?id="+id) as Observable<Command>;
  }

}
