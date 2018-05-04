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

  testName : string = "TestNom";

  testRole : string;

  testStatus = false;

  constructor(private connectionService : ConnectionService) { 
    this.connectionService = connectionService
  }

  ngOnInit()
  {
  }

}
