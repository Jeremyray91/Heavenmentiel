import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Event } from '../event';
import { EventService } from '../event.service'

@Component({
  selector: 'app-search-events',
  templateUrl: './search-events.component.html',
  styleUrls: ['./search-events.component.css']
})
export class SearchEventsComponent implements OnInit {
  eventService : EventService;
  events:Array<Event>;
  model = {name : null, dateMin : new Date(), dateMax : new Date(), place : null, type: null, minPrice : null, maxPrice : null};

  constructor(eventService : EventService) {
    this.eventService = eventService;
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log("test")
    this.eventService.getEventMultiCriteria(this.model.name,this.model.dateMin,this.model.dateMax,this.model.place,this.model.type,this.model.minPrice,this.model.maxPrice).subscribe(events => this.events = events);
    /*this.eventService.getEvents().subscribe(events => {
      this.events = events;
    });*/
  }

}
