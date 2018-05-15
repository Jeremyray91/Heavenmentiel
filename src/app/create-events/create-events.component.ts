import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Evenement } from '../event';
import { EventService } from '../event.service'
import { EventsComponent } from '../events/events.component';
import { Type } from '../enum-event';
import { Message, SelectItem } from 'primeng/api';
import { FileUpload } from 'primeng/primeng';

@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.css']
})
export class CreateEventsComponent implements OnInit {
  eventUp : Evenement;
  eventsCompo : EventsComponent;
  eventService : EventService;
  events: Array<Event>;
  types: SelectItem[] = new Array<SelectItem>();
  typeEvent: string;
  model : Evenement = new Evenement("", "", null, null, 0.0, null, "", "", false, "","");
  msgs: Message[];
  @ViewChild('fileInputMin') fileInputMin: FileUpload;
  @ViewChild('fileInput') fileInput: FileUpload;

  imgUrlRoot: string = "assets"

  keys = Object.keys(this.types);

  constructor(eventService : EventService, eventsCompo : EventsComponent) {
    this.eventService = eventService;
    this.eventsCompo = eventsCompo
  }

  ngOnInit() {
    this.eventUp = JSON.parse(localStorage.getItem('event'));
    for (let t in Type) {
      if (isNaN(Number(t))) {
        this.types.push({"label" : t, "value" : t});
      }
    }
    if(this.eventUp != null) {
      this.model = this.eventUp;
      let date = new Date(this.eventUp.dateEvent);
      this.model.dateEvent = new Date(date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
      this.model.type = this.eventUp.type;
    }
  }

  onUploadMin(event) {
    for(let file of event.files) {
      this.model.imgMin = this.imgUrlRoot + "/img_miniature/" + file.name;
    }
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Fichier enregistré', detail: ''});
  }

  onUpload(event) {
    for(let file of event.files) {
      this.model.img = this.imgUrlRoot + "/img_carousel/" + file.name;
    }
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Fichier enregistré', detail: ''});
  }
  onSubmit(event){
    if(this.eventUp != null){
      let date = new Date(this.model.dateEvent);
      date.setHours(20);
      this.model.dateEvent = date;
      this.model.type = ((this.model.type).toUpperCase() as String) as Type;
      this.eventService.updateEvent(this.model).subscribe();
      localStorage.removeItem('event');
      this.msgs = [];
      this.msgs.push({severity: 'success', summary: 'Événement mis à jour', detail: ''});
    } else {
      let date = new Date(this.model.dateEvent);
      date.setHours(20);
      this.model.dateEvent = date;
      this.eventService.createEvent(this.model);
      this.fileInput.upload();
      this.fileInputMin.upload();
      this.msgs = [];
      this.msgs.push({severity: 'success', summary: 'Événement créé', detail: ''});
    }
    this.model = new Evenement("", "", null, null, 0.0, 0, "", "", false, "","");
  }
}
