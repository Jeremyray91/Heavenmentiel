import { Component, OnInit } from '@angular/core';
import { EVENTS } from './listEventsMock';
import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  listEvents : Array<Event>;
  listFiveEvents : Array<Event>;
  dateString : string;

  constructor(private eventService : EventService) {
    this.eventService = eventService;
   }

  ngOnInit() {
    //this.listEvents = EVENTS;
    this.eventService.getEventsByDate().subscribe(events => this.listEvents = events);
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
