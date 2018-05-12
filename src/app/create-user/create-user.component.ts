import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Message } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userService : UserService;
  users : Array<User>;
  model : User = new User("", "", null, "", null, "", "", null, "", "USER");
  equals : boolean;
  confirmPwd : string = "";
  fr: any;
  mailReg : RegExp = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  msgs: Message[];

  userCreated : boolean;

  @Output()
  onCreate = new EventEmitter<string>();

  constructor(userService : UserService, private router : Router) {
    this.userService = userService;
    this.userCreated = false;
   }

  ngOnInit() {
    this.fr = {
      firstDayOfWeek: 1,
      dayNames: [ "dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi" ],
      dayNamesShort: [ "dim","lun","mar","mer","jeu","ven","sam" ],
      dayNamesMin: [ "D","L","M","M","J","V","S" ],
      monthNames: [ "janvier","fevrier","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre" ],
      monthNamesShort: [ "janv","fevr","mars","avr","mai","juin","jull","août","sept","oct","nov","dec" ],
      today: 'Aujourd\'hui',
      clear: 'Effacer'
    }
  }

onSubmit(){
  this.userService.checkUserMail(this.model.mail).subscribe(result => {
    if(result)
    {
      this.msgs = [];
      this.msgs.push({severity: 'error', summary: 'Echec de création de l\'utilisateur', detail: 'Adresse mail déjà utilisée'});
    }
    else
    {
      this.userService.createUser(this.model).subscribe(
        data => {
          this.onCreate.emit(this.model.firstName);
          this.model = new User("", "", null, "", null, "", "", null, "", "USER");
          this.confirmPwd = "";
          this.userCreated = true;
        },
        error =>
        {
          this.msgs = [];
          this.msgs.push({severity: 'error', summary: 'Echec de création de l\'utilisateur', detail: ''});
        });
      }
    });
  }

  pwdEqual(){
    if(this.model.pwd == this.confirmPwd){
      this.equals = true;
    } else {
      this.equals = false;
    }
  }

  switchUserCreated() : boolean
  {
    this.userCreated = false;
    return true;
  }

}
