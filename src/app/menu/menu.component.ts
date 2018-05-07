import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { User } from '../user'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 
  user : User;

  userName : string;

  userRole : string;

  userStatus = false;

  constructor(private connectionService : ConnectionService) { 
    this.connectionService = connectionService;
  }

  ngOnInit()
  {
    this.user = JSON.parse(sessionStorage.getItem('currentUser'));
    if(localStorage.getItem('currentUser'))
    {
      this.userName = this.user.firstName;
      this.userRole = this.user.role;
      this.userStatus = true;
    }
  }

}
