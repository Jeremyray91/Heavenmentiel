import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-paginator',
  templateUrl: './event-paginator.component.html',
  styleUrls: ['./event-paginator.component.css']
})
export class EventPaginatorComponent implements OnInit {
  
  @Input()  nbEvents:number = 0;
  @Input()  pages:number = 0;
  
  constructor() { }

  ngOnInit() {
  }

}
