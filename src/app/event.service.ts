import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Event } from './event';
import { SelectItem } from 'primeng/api';

@Injectable()
export class EventService {

  constructor(private httpClient : HttpClient) { }
  
  getEvents() : Observable<Event[]> {
    return this.httpClient.get("http://localhost:8082/heavenmentiel/api/events") as Observable<Event[]>;
  }

  getEventsByDate() : Observable<Event[]> {
    return this.httpClient.get("http://localhost:8082/heavenmentiel/api/eventsbydate") as Observable<Event[]>;
  }

  getEventsLastFiveAdd() : Observable<Event[]> {
    return this.httpClient.get("http://localhost:8082/heavenmentiel/api/eventsLastFiveAdd") as Observable<Event[]>;
  }

  getEventById(id:number) : Observable<Event>{
    return this.httpClient.get("http://localhost:8082/heavenmentiel/api/eventsById?id="+id) as Observable<Event>;
  }

  getEventMultiCriteria(name:string,dateMin:Date,dateMax:Date,place:string,type:Array<SelectItem>,price:number[]) : Observable<Array<Event>>{
    let params = new HttpParams();
    let options = {year: "numeric", month: "2-digit", day: "2-digit"};
    let types : string;

    if(type!=null){
      if(type.length>0)
      {
        types = "";
        let debut = true;
        for(let t of type){
          if(debut){
            types += t.value;
            debut = false;
          }
          else
            types += ","+t.value;
        }
        params = params.set('types',types);
      }
    }

    if(name!=null)
      params = params.set('name', name);
    if(dateMin!=null)
      params = params.set('datemin',dateMin.toLocaleString('en-GB',options));
    if(dateMax!=null)
      params = params.set('datemax',dateMax.toLocaleString('en-GB',options));
    if(place!=null)
      params = params.set('place',place);
    if(price[0]!=null)
      params = params.set('pricemin',price[0].toString());
    if(price[1]!=null)
      params = params.set('pricemax',price[1].toString());
    return this.httpClient.get("http://localhost:8082/heavenmentiel/api/events/multicriteria",{params : params}) as Observable<Array<Event>>;
  }

  createEvent(event:Event):Observable<Event>{
    console.log(this.httpClient.post("http://localhost:8082/heavenmentiel/api/events",event) as Observable<Event>);
    return this.httpClient.post<Event>("http://localhost:8082/heavenmentiel/api/events",event) as Observable<Event>;
  }
  updateEvent(event:Event):Observable<Event>{
    return this.httpClient.put<Event>("http://localhost:8082/heavenmentiel/api/events", event) as Observable<Event>;
  }
  deleteEvent(id:number):Observable<{}>{
    return this.httpClient.delete("http://localhost:8082/heavenmentiel/api/events/"+id);
  }

  getTypes() : Observable<Array<String>>{
    return this.httpClient.get("http://localhost:8082/heavenmentiel/api/types") as Observable<Array<String>>;
  }
}
