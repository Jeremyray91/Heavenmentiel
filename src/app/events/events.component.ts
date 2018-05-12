import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../event';
import { EventService } from '../event.service';
import { Type } from '../enum-event'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  
  eventUp : Event;
  
  model:Event = new Event("", "", null, null, 0.0, null, "", "", false, "","");
  @Input()
  events:Array<Event> = new Array<Event>();

  constructor(private eventService : EventService) {
    this.eventService = eventService;
   }

  ngOnInit() {
  }

  linkUpdate(event: Event){
    localStorage.setItem('event', JSON.stringify(event));
    console.log(event);
  }

  delete(id : number){
    this.eventService.deleteEvent(id).subscribe(res => this.ngOnInit());
  }

  onChange(event : Event){
    //Conversion pour le service updateEvent
    console.log(event);
    this.model = new Event(event.name, event.place, event.type, event.dateEvent, event.price, event.stock, event.description, event.shortDescription, event.available, event.img, event.imgMin);
    this.model.type = ((this.model.type).toUpperCase() as String) as Type;
    console.log(this.model)
    //Parser la date dans le bon format
    this.eventService.updateEvent(this.model).subscribe();
    this.model = new Event("", "", null, null, 0.0, null, "", "", false, "","");
  }

}
