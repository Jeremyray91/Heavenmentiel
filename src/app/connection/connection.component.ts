import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { ConnectionBean } from '../connection-bean';
import { Observable } from 'rxjs';
import { Message } from 'primeng/components/common/api';
import { User } from '../user';
import { MenuComponent } from '../menu/menu.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})

export class ConnectionComponent implements OnInit {

  msgs: Message[] = [];
  connectedUser: User;
  connectionBean: ConnectionBean = new ConnectionBean("", "");

  model: ConnectionBean = new ConnectionBean("", "");
  submitted = false;

  type : string;

  test : any;

  constructor(private connectionService : ConnectionService, private route : ActivatedRoute, private router: Router) 
  {
    this.connectionService = connectionService;
  }

  ngOnInit() {
    console.log("type before : " + this.type);
    //this.test = this.route.paramMap.pipe(switchMap((params: ParamMap) => this.type = (params.get('type'))));
    console.log("paramMap : " );
    this.route.paramMap.pipe(switchMap((params: ParamMap) => this.type = (params.get('type'))))
    console.log("type after : " + this.type);
  }


  onSubmit() {
    this.submitted = true;
    console.log("OnSubmit()");
    console.log(this.model);
    console.log("UserIsConnected : " + this.connectionService.userIsConnected);
    this.connectionService.connect(this.model).subscribe(
      data => {
        console.log("success");
        this.showSucces();
        this.connectionBean = this.model;
        this.connectionService.userIsConnected = true;
        this.connectionService.getUser(this.connectionBean).subscribe(user => {
        this.connectedUser = user; console.log(this.connectedUser);
        this.connectedUser.pwd = null;
        sessionStorage.setItem('currentUser', JSON.stringify(this.connectedUser));
        });

      },
      error => {
        console.error("Connection failed !");
        this.showFailure();
        this.model.password = "";
        this.connectionService.userIsConnected = false;
        return Observable.throw(error);
      });
    //this.model = new ConnectionBean("","");
    //this.connectionService.connect(this.model);
    //this.model = new ConnectionService();
  }

  showSucces() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Connection Successful', detail: 'Connection submitted' });
  }

  showFailure() {
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'Connection failed', detail: 'Incorrect login or password' });
  }

}
