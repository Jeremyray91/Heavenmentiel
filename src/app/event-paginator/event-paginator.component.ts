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

  paginate(event) {
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
    console.log(event.page);
    console.log("test")
}

}
