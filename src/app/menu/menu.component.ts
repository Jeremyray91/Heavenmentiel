import { Component, OnInit, Input } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 
  user : User;

  userName : string;

  userRole : string;

  userConnected : boolean;

  constructor(private connectionService : ConnectionService, private router: Router) { 
    this.connectionService = connectionService;
    this.router = router;
  }

  ngOnInit()
  {
    console.log(this.connectionService);
    console.log("MenuComponent - UserIsConnected : " + this.connectionService.userIsConnected);
    console.log(this.connectionService.getStatus().subscribe(isConnected => this.userConnected = isConnected));
    this.connectionService.getStatus().subscribe(isConnected => this.userConnected = isConnected);
    this.user = JSON.parse(sessionStorage.getItem('currentUser'));
    if(localStorage.getItem('currentUser'))
    {
      this.user = JSON.parse(sessionStorage.getItem('currentUser'));
      this.userName = this.user.firstName;
      this.userRole = this.user.role;
    }
  }

  redirect(direction : string)
  {
    //if(direction === "connection")
    {
      this.router.navigate(['/Connection']);
    }
  }

}
