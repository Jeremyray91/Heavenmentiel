import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Event } from '../event';
import { EventService } from '../event.service'

@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.css']
})
export class CreateEventsComponent implements OnInit {
  eventService : EventService;
  events:Array<Event>;
  model : Event = new Event("", "", null, null, 0.0, null, "", "", false, "","");

  constructor(eventService : EventService) {
    this.eventService = eventService;
  }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.model);
    this.eventService.createEvent(this.model);
    this.model = new Event("", "", null, null, 0.0, 0, "", "", false, "","");
  }
}
