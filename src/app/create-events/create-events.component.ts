import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Event } from '../event';
import { EventService } from '../event.service'
import { EventsComponent } from '../events/events.component';
import { Type } from '../enum-event';
import { Message } from 'primeng/api';
import { FileUpload } from 'primeng/primeng';

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
  @ViewChild('fileInputMin') fileInputMin: FileUpload;
  @ViewChild('fileInput') fileInput: FileUpload;

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
      this.model.imgMin = this.imgUrlRoot + "/img_miniature/" + file.name;
    }
    
    console.log(this.model.imgMin);
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  onUpload(event) {
    for(let file of event.files) {
      console.log(file.name);
      this.model.img = this.imgUrlRoot + "/img_carousel/" + file.name;
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
      this.fileInput.upload();
      this.fileInputMin.upload();
    }
    this.model = new Event("", "", null, null, 0.0, 0, "", "", false, "","");
  }
}
