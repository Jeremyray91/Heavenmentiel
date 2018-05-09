import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event';
import { Type } from '../enum-event';
import {} from '@types/googlemaps';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  
  event : Event;
  mapOptions : any;
  mapPosition : any;
  mapOverlays : any[];
  category : string ;

  constructor(private eventService : EventService, private route : ActivatedRoute, private router: Router) {
    this.eventService = eventService;
  }

  ngOnInit() {

    this.mapPosition = {lat: 43.604587, lng: 1.447928};
    this.mapOverlays = 
    [
      new google.maps.Marker({position: this.mapPosition, title:"Cinema Gaumont Wilson"})
    ]

    this.mapOptions = {
      center : this.mapPosition,
      zoom: 18
    };

    /*this.event = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.eventService.getEventById(parseInt(params.get('id')));
        console.log(this.event);
      });
    );*/

    this.eventService.getEventById(parseInt(localStorage.getItem("requestedEvent"))).subscribe(evt => {
      this.event = evt;
      console.log(this.event);
    });
      
    
  }

  index: number = 0;

    openNext() {
        this.index = (this.index === 2) ? 0 : this.index + 1;
    }

    openPrev() {
        this.index = (this.index === 0) ? 2 : this.index - 1;
    }

}
