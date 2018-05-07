import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

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

  constructor(userService : UserService) {
    this.userService = userService;
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
    this.userService.createUser(this.model).subscribe();
    this.model = new User("", "", null, "", null, "", "", null, "", "USER");
  }

  pwdEqual(){
    if(this.model.pwd == this.confirmPwd){
      this.equals = true;
    } else {
      this.equals = false;
    }
  }

}
