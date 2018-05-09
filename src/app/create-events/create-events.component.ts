import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Event } from '../event';
import { EventService } from '../event.service'
import { EventsComponent } from '../events/events.component';
import { Type } from '../enum-event';
import { Message } from 'primeng/api';

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
  msgs: Message[];

  imgUrlRoot: string = "assets"

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

  onUploadMin(event) {
    for(let file of event.files) {
      console.log(file.name);
      this.model.img = this.imgUrlRoot + "/img_miniature/" + file.name;
    }
    event.upload();
    console.log(this.model.img);
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  onUpload(event) {
    for(let file of event.files) {
      console.log(file.name);
      this.model.img = this.imgUrlRoot + "/img/" + file.name;
    }
   
    console.log(this.model.img);
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
  onSubmit(event){
    console.log(this.model);
    if(this.eventUp != null){
      this.eventService.updateEvent(this.model).subscribe();
    } else {
      this.eventService.createEvent(this.model);
    }
    this.model = new Event("", "", null, null, 0.0, 0, "", "", false, "","");
  }
}
