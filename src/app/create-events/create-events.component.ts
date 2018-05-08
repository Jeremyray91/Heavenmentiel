import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Event } from '../event';
import { EventService } from '../event.service'
import { EventsComponent } from '../events/events.component';
import { Type } from '../enum-event';

@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.css']
})
export class CreateEventsComponent implements OnInit {
  eventUp : Event;
  eventsCompo : EventsComponent;
  eventService : EventService;
  events:Array<Event>;
  model : Event = new Event("", "", Type.CONCERT, null, 0.0, null, "", "", false, "","");

  constructor(eventService : EventService, eventsCompo : EventsComponent) {
    this.eventService = eventService;
    this.eventsCompo = eventsCompo
  }

  ngOnInit() {
    this.eventUp = JSON.parse(localStorage.getItem('event'));
    console.log(this.eventUp);
    if(this.eventUp != null) {
      this.model = this.eventUp;
      this.model.type = Type.CONCERT;
    }
  }
  onSubmit(){
    console.log(this.model);
    if(this.eventUp != null){
      this.eventService.updateEvent(this.model).subscribe();
    } else {
      this.eventService.createEvent(this.model).subscribe();
    }
    this.model = new Event("", "", null, null, 0.0, 0, "", "", false, "","");
  }
}
