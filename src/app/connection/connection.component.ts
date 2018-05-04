import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { ConnectionBean } from '../connection-bean';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})

export class ConnectionComponent implements OnInit {

  model : ConnectionBean = new ConnectionBean("","");
  submitted = false;

  constructor(private connectionService : ConnectionService) 
  {
    this.connectionService = connectionService;
  }
  
  test : any;
  error : any;

  ngOnInit() {
  }

  onSubmit()
  {
    this.submitted = true;
    console.log("là");
    console.log(this.model);
    this.connectionService.connect(this.model).subscribe(
      data => this.test = {...data},
      error => this.error = error);
    console.log(this.test);
    console.log(this.error);
    //this.model = new ConnectionBean("","");
    //this.connectionService.connect(this.model);
    //this.model = new ConnectionService();
  }

}
