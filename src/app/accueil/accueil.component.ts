import { Component, OnInit } from '@angular/core';
import { EVENTS } from './listEventsMock';
import { Evenement } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  listEvents : Array<Evenement>;
  listFiveEvents : Array<Evenement>;
  dateString : string;

  constructor(private eventService : EventService) {
    this.eventService = eventService;
   }

  ngOnInit() {
    //this.listEvents = EVENTS;
    this.eventService.getEventsByDate().subscribe(events => {this.listEvents = events;
    for (let e of this.listEvents){
      let date = new Date(e.dateEvent);
      e.dateEvent = date;
    }});
    this.eventService.getEventsLastFiveAdd().subscribe(eventsFive => this.listFiveEvents = eventsFive);
  }

  redirect(id : string)
  {
    if(id)
    {
      localStorage.setItem("requestedEvent", id);
    }
  }

}
