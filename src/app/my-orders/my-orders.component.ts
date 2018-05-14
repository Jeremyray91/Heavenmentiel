import { Component, OnInit } from '@angular/core';
import { Command } from '../command';
import { CommandService } from '../command.service';
import { User } from '../user';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  myOrders = new Array<Command>();
  isEmpty : boolean = false;
  
  currentUser : User = null;


  constructor(private commandService : CommandService ) {
    this.commandService = commandService;
  }

  ngOnInit() {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    if(this.currentUser != null)
    {
      //parseInt(this.currentUser.id)
      this.commandService.getUserCommands(5).subscribe(result =>
      {
        this.myOrders = result;
        this.checkIsEmpty();
      })
    }
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
