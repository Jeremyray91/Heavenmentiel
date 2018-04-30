import { Component, OnInit } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-evenements',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {

  events:Array<Event>;
  model:Event = new Event(0,"",null,"","",0,null,0.0);
  constructor() { }

  ngOnInit() {
  }

}
