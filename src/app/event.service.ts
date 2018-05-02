import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Event} from './event';

@Injectable()
export class EventService {

  constructor(private httpClient : HttpClient) { }
  
  getEvents() : Observable<Array<Event>>{
    return this.httpClient.get("http://localhost:8082/heavenmentiel/api/events/") as Observable<Array<Event>>;
  }

  getEventById(id:number){
    this.httpClient.get("http://localhost:8082/events/api/events/"+id);
  }

  getEventMultiCriteria(name:string,dateMin:Date,dateMax:Date,place:string,type:Array<string>,minPrice:number,maxPrice:number) : Observable<Array<Event>>{
    let params = new HttpParams().set('name', name)
      .set('datemin',dateMin.toLocaleString())
      .set('datemax',dateMax.toLocaleString())
      .set('place',place)
      .set('types',type.toString())
      .set('pricemin',minPrice.toString())
      .set('pricemax',maxPrice.toString());
    return this.httpClient.get("http://localhost:8082/heavenmentiel/api/events/multicriteria",{params : params}) as Observable<Array<Event>>;
  }

  createEvent(event:Event):Observable<Event>{
    return this.httpClient.post("http://localhost:8082/events/api/events/",event) as Observable<Event>;
  }
  updateEvent(event:Event):Observable<Event>{
    return this.httpClient.put("http://localhost:8082/events/api/events/",event) as Observable<Event>;
  }
  deleteEvent(id:number):Observable<Event>{
    return this.httpClient.delete("http://localhost:8082/events/api/events/"+id) as Observable<Event>;
  }
}
