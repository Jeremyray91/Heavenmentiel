import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  msgs: Message[] = [];
  userService : UserService;
  user : User = new User("", "", null, "", null, "", "", null, "", "");
  disabled : boolean = true;
  modifPwd : boolean = false;
  equals : boolean;
  confirmPwd : string = "";
  newPwd : string;
  fr : any;

  constructor(userService : UserService) {
    this.userService = userService;
   }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('currentUser'));
    this.user.birthDay = new Date(this.user.birthDay);
    console.log(this.user);
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

  toggleDisabled(){
    this.disabled = !this.disabled;
  }

  toggleModifPwd(){
    this.modifPwd = !this.modifPwd;
  }

  pwdEqual(){
    if(this.newPwd == this.confirmPwd){
      this.equals = true;
    } else {
      this.equals = false;
    }
  }

  onSubmit(){
    if(this.newPwd != null){
      this.user.pwd = this.newPwd;
    }
    this.disabled = !this.disabled;
    this.showSucces();
    this.userService.updateUser(this.user).subscribe(() => this.showSucces());
  }

  showSucces() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'OK !', detail: 'Modification effectuée' });
  }

  cancel(){
    this.disabled = !this.disabled;
  }

}
