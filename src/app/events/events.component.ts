import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  
  eventUp : Event;

  model:Event = new Event("",null,null,null,0,0,"",null,false, "", "");
  @Input()
  events:Array<Event> = new Array<Event>();
  constructor() { }

  ngOnInit() {
  }

  linkUpdate(event: Event){
    localStorage.setItem('event', JSON.stringify(event));
    console.log(event);
  }

}
