import { Component, OnInit, Input } from '@angular/core';
import { Evenement } from '../event';
import { EventService } from '../event.service';
import { Type } from '../enum-event'
import { Evenement2 } from '../evenement2';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  
  eventUp : Evenement;
  
  model:Evenement = new Evenement("", "", null, null, 0.0, null, "", "", false, "","");
  @Input()
  events:Array<Evenement> = new Array<Evenement>();

  constructor(private eventService : EventService) {
    this.eventService = eventService;
   }

  ngOnInit() {
  }

  linkUpdate(event: Evenement){
    localStorage.setItem('event', JSON.stringify(event));
    console.log(event);
  }

  delete(id : number){
    this.eventService.deleteEvent(id).subscribe(res => this.ngOnInit());
  }

  onChange(event : Evenement){
    //Conversion pour le service updateEvent
    //console.log(event);
    this.model = new Evenement2(event.id,event.name, event.place, event.type, event.dateEvent, event.price, event.stock, event.description, event.shortDescription, event.available, event.img, event.imgMin);
    this.model.type = ((event.type).toUpperCase() as String) as Type;
    //event.dateEvent = this.eventService.parseDateFr(event.dateEvent);
    this.eventService.updateEventId(this.model).subscribe();
    this.model = new Evenement("", "", null, null, 0.0, null, "", "", false, "","");
  }

}
