import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Event } from '../event';
import { EventService } from '../event.service'
import { Type } from '../enum-event';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-search-events',
  templateUrl: './search-events.component.html',
  styleUrls: ['./search-events.component.css']
})
export class SearchEventsComponent implements OnInit {
  eventService : EventService;
  events:Array<Event>;
  model = {name : null, dateMin : new Date(), dateMax : new Date(), place : null, type: null, price : [0,150]};
  types : SelectItem[] = new Array<SelectItem>();
  submitted : boolean;
  itemsByPage : number = 4;
  totalRecords: number = 0;

  constructor(eventService : EventService) {
    this.eventService = eventService;
  }

  ngOnInit() {
      for (let t in Type) {
        if (isNaN(Number(t))) {
          let type : string;
          type = String(t);
          this.types.push({"label" : type, "value" : type});
        }
      }
  }

  onSubmit(page:number){
    this.eventService.getEventMultiCriteria(this.model.name,this.model.dateMin,this.model.dateMax,this.model.place,this.model.type,this.model.price,page).subscribe(events => {
      this.events = events["events"];
      this.totalRecords = events["pages"]*this.itemsByPage;
      this.submitted = true;
    });
    /*this.eventService.getEvents().subscribe(events => {
      this.events = events;
    });*/
  }

}
