import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventService } from '../event.service'

@Component({
  selector: 'app-event-paginator',
  templateUrl: './event-paginator.component.html',
  styleUrls: ['./event-paginator.component.css']
})
export class EventPaginatorComponent implements OnInit {
  
  @Input()  totalRecords:number = 0;
  @Input()  itemsByPage:number = 0;
  eventService : EventService;
  @Output() valueChange = new EventEmitter();
  
  constructor(eventService : EventService) {
    this.eventService = eventService;
  }

  ngOnInit() {
  }

  paginate(event) {
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
    this.valueChange.emit(event.page+1);
  };

}
