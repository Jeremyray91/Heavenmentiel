import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  getEventMultiCriteria(name:String,dateMin:Date,dateMax:Date,place:String,type:Array<number>,minPrice:number,maxPrice:number) :Observable<Event>{
    //select e from Event e where name LIKE ? and (date > ? and date < ?) and place like ? and type in (?) and price > ? and price < ?;
    return this.httpClient.get("http://localhost:8082/events/api/events/"+name+"/"+dateMin+"/"+dateMax+"/"+place+"/"+type+"/"+minPrice+"/"+maxPrice) as Observable<Event>;
    //URLEncoder l'array type
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
