import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Evenement } from './event';
import { SelectItem } from 'primeng/api';

@Injectable()
export class EventService {

  constructor(private httpClient : HttpClient) { }
  
  getEvents() : Observable<Evenement[]> {
    return this.httpClient.get("http://localhost:8082/heavenmentiel/api/events") as Observable<Evenement[]>;
  }

  getEventsByDate() : Observable<Evenement[]> {
    return this.httpClient.get("http://localhost:8082/heavenmentiel/api/eventsbydate") as Observable<Evenement[]>;
  }

  getEventsLastFiveAdd() : Observable<Evenement[]> {
    return this.httpClient.get("http://localhost:8082/heavenmentiel/api/eventsLastFiveAdd") as Observable<Evenement[]>;
  }

  getEventById(id:number) : Observable<Evenement>{
    return this.httpClient.get("http://localhost:8082/heavenmentiel/api/eventsById?id="+id) as Observable<Evenement>;
  }

  getEventMultiCriteria(name:string,dateMin:Date,dateMax:Date,place:string,type:Array<SelectItem>,price:number[],page:number,role:string) : Observable<Object>{
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
    if(page!=null)
      params = params.set('page',page.toString());
    if(role!=null)
      params = params.set('role',role);
    return this.httpClient.get("http://localhost:8082/heavenmentiel/api/events/multicriteria",{params : params});
  }

  createEvent(event:Evenement){
    this.httpClient.post<Evenement>("http://localhost:8082/heavenmentiel/api/events",event).subscribe();
  }
  updateEvent(event:Evenement):Observable<Evenement>{
    return this.httpClient.put<Evenement>("http://localhost:8082/heavenmentiel/api/events", event) as Observable<Evenement>;
  }
  updateEventId(event:Evenement):Observable<Evenement>{
    let date : string;
    date = this.parseDateFr(event.dateEvent);
    event.dateEvent = null;
    return this.httpClient.put<Evenement>("http://localhost:8082/heavenmentiel/api/events", event) as Observable<Evenement>;
  }

  deleteEvent(id:number):Observable<{}>{
    return this.httpClient.delete("http://localhost:8082/heavenmentiel/api/events/"+id);
  }

  getTypes() : Observable<Array<String>>{
    return this.httpClient.get("http://localhost:8082/heavenmentiel/api/types") as Observable<Array<String>>;
  }

  parseDateFr(date:Date) : string{
    let options = {year: "numeric", month: "2-digit", day: "2-digit"};
    return date.toLocaleString('en-GB',options)
  }
}
