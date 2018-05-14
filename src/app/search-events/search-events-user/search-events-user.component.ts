import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Evenement } from '../../event';
import { EventService } from '../../event.service'
import { Type } from '../../enum-event';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-search-events-user',
  templateUrl: './search-events-user.component.html',
  styleUrls: ['./search-events-user.component.css']
})
export class SearchEventsUserComponent implements OnInit {
  
  eventService : EventService;
  events:Array<Evenement>;
  model = {name : null, dateMin : null, dateMax : null, place : null, type: null, price : [0,30]};
  types : SelectItem[] = new Array<SelectItem>();
  totalRecords: number = 0;
  itemsByPage : number = 4;
  submitted : boolean;

  fr: any;
  eventNameReg : RegExp = /^[0-9A-Za-z \-]+/

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

      this.fr = {
        firstDayOfWeek: 1,
        dayNames: [ "dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi" ],
        dayNamesShort: [ "dim","lun","mar","mer","jeu","ven","sam" ],
        dayNamesMin: [ "D","L","M","M","J","V","S" ],
        monthNames: [ "janvier","fevrier","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre" ],
        monthNamesShort: [ "janv","fevr","mars","avr","mai","juin","jull","août","sept","oct","nov","dec" ],
        today: 'Aujourd\'hui',
        clear: 'Effacer'
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
