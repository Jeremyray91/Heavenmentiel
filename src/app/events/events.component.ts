import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  @Input()
  events:Array<Event> = new Array<Event>();
  model:Event = new Event("", "", "", null, 0.0, 0, "", "", false, "");
  constructor() { }

  ngOnInit() {
  }

  setEvents(events: Array<Event>){
    this.events = events;
  }

}
