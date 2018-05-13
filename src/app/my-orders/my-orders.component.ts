import { Component, OnInit } from '@angular/core';
import { Command } from '../command';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  myOrders = new Array<Command>();
  isEmpty : boolean = false;


  constructor() { }

  ngOnInit() {
    //this.checkIsEmpty();
  }

  checkIsEmpty()
  {
    if(this.myOrders.length > 0)
    {
      this.isEmpty = false;
    }
    else
    {
      this.isEmpty = true;
    }
  }

}
