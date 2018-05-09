import { Component, OnInit, Input } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { ConnectionComponent } from '../connection/connection.component';
import { MenuItem } from 'primeng/api';
import { AccueilComponent } from '../accueil/accueil.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 
  user : User;

  userName : string;

  userRole : string;

  userConnected : boolean = true;
  
  onConnection : boolean = true;

  index : number = 1;

  items : MenuItem[];

  

  constructor(private connectionService : ConnectionService, private router: Router) { 
    this.connectionService = connectionService;
    this.router = router;
  }

  ngOnInit()
  {
    this.items = [
      { label: 'Listes événements', icon: 'fa-plus' },
      { label: 'Ajouter un événement', icon: 'fa-download' },
      { label: 'Profile', icon: 'fa-refresh' },
      { label: 'Connection', icon: 'fa-refresh' }
    ];
    console.log(this.connectionService);
    console.log("Connection Service userIsConnected : " + this.connectionService.userIsConnected);
    console.log("MenuComponent - UserIsConnected : " + this.connectionService.userIsConnected);
    //console.log(this.connectionService.getStatus().subscribe(isConnected => this.userConnected = isConnected));
    //this.connectionService.getStatus().subscribe(isConnected => this.userConnected = isConnected);
    this.user = JSON.parse(sessionStorage.getItem('currentUser'));
    if(localStorage.getItem('currentUser'))
    {
      this.user = JSON.parse(sessionStorage.getItem('currentUser'));
      console.log("JSON parse");
    }
  }

  redirect(direction : string)
  {
    console.log(direction);
    if(direction == "inscription")
    {
      this.onConnection = false;
      this.router.navigate(['/Connection']);
      console.log("OnConnection : " + this.onConnection);
    }
    else
    {
      this.onConnection = true;
      this.router.navigate(['/Connection']);
      console.log("OnConnection : " + this.onConnection);
    }
  }

  disconnect(){
    this.connectionService.disconnect().subscribe();
    sessionStorage.clear();
    this.ngOnInit();
  } 

}
