import { Component, OnInit, Input } from '@angular/core';
import { Command } from '../command';
import { Achatevent } from '../achatevent';
import { Evenement } from '../event';
import { Type } from '../enum-event';

@Component({
  selector: 'app-display-order',
  templateUrl: './display-order.component.html',
  styleUrls: ['./display-order.component.css']
})
export class DisplayOrderComponent implements OnInit {

  @Input()
  order : Command;

  events = new Array<Achatevent>();
  eventTest = new Evenement("event1", "Toulouse", Type.CINEMA, new Date(), 10.0, 20, "Description Test", "Short Description Test", true, "assets/img_carousel/slide1.jpg","assets/img_miniature/min1.jpg");

  constructor() {
    
    let achatEventTest = new Achatevent(this.eventTest, this.order, 4);
    this.events.push(achatEventTest);
    this.events.push(achatEventTest);
    this.events.push(achatEventTest);
    this.events.push(achatEventTest);
    console.log(achatEventTest);
  }

  ngOnInit() {
    console.log(this.events);
    //this.order = new Command(1000,new Date(),JSON.parse(sessionStorage.getItem('currentUser')),achatEvents);
  }
}
