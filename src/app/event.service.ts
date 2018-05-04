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
    let options = {year: "numeric", month: "2-digit", day: "2-digit"};
    let params = new HttpParams();
    if(name!=null)
      params = params.set('name', name);
    if(dateMin!=null)
      params = params.set('datemin',dateMin.toLocaleString('en-GB',options));
    if(dateMax!=null)
      params = params.set('datemax',dateMax.toLocaleString('en-GB',options));
    if(place!=null)
      params = params.set('place',place);
    if(type!=null)
      params = params.set('types',type.toString());
    if(minPrice!=null)
      params = params.set('pricemin',minPrice.toString());
    if(maxPrice!=null)
      params = params.set('pricemax',maxPrice.toString());
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

  getTypes() : Observable<Array<String>>{
    return this.httpClient.get("http://localhost:8082/heavenmentiel/api/types") as Observable<Array<String>>;
  }
}
