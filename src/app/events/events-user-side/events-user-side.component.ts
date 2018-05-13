import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Evenement } from '../../event';
import { EventService } from '../../event.service';

@Component({
  selector: 'app-events-user-side',
  templateUrl: './events-user-side.component.html',
  styleUrls: ['./events-user-side.component.css']
})
export class EventsUserSideComponent implements OnInit {

  model:Evenement = new Evenement("",null,null,null,0,0,"",null,false, "", "");
  @Input()
  events:Array<Event> = new Array<Event>();

  @Input()  totalRecords:number = 0;
  @Input()  itemsByPage:number = 0;
  eventService : EventService;
  @Output() valueChange = new EventEmitter();

  constructor(eventService : EventService) {
    this.eventService = eventService;
  }

  ngOnInit() {
  }

  redirect(id : string)
  {
    if(id)
    {
      localStorage.setItem("requestedEvent", id);
    }
  }
}
