import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-events',
  templateUrl: './search-events.component.html',
  styleUrls: ['./search-events.component.css']
})
export class SearchEventsComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("tyrest");
  }

}
