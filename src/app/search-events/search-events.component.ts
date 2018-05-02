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

  constructor(eventService : EventService) { 
    this.eventService = eventService;
  }

  ngOnInit() {
  }

  onSubmit(){
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
    });
  }

}
