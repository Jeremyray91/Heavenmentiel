import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  @Input()
  model:Event = new Event("",null,null,null,0,0,"",null,false, "", "");
  events:Array<Event> = new Array<Event>();
  constructor() { }

  ngOnInit() {
  }

  setEvents(events: Array<Event>){
    this.events = events;
  }

}
