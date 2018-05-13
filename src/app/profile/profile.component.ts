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
  pwdChanged : boolean;
  oldMail : string;
  fr : any;
  nameReg : RegExp = /^[A-Za-z \-]+/
  adressReg : RegExp = /^[0-9A-Za-z \-]/
  mailReg : RegExp = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

  constructor(userService : UserService) {
    this.userService = userService;
   }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('currentUser'));
    this.user.birthDay = new Date(this.user.birthDay);
    this.oldMail = this.user.mail;
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
    if(this.disabled)
    {
      this.user = JSON.parse(sessionStorage.getItem('currentUser'));
      this.user.birthDay = new Date(this.user.birthDay);
      if(this.modifPwd)
      {
        this.toggleModifPwd();
      }
    }
  }

  toggleModifPwd(){
    this.modifPwd = !this.modifPwd;
    if(!this.modifPwd)
    {
      this.newPwd = null;
      this.confirmPwd = null;
    }
  }

  pwdEqual(){
    if(this.newPwd == this.confirmPwd){
      this.equals = true;
    } else {
      this.equals = false;
    }
  }

  async onSubmit(){
    if(this.modifPwd && this.newPwd != null){
      this.user.pwd = this.newPwd;
      this.pwdChanged = true;
      console.log("ici");
    }
    else
    {
      this.pwdChanged = false;
      this.user.pwd = await this.userService.getOldPwd(this.oldMail);
      console.log("old path");
    }
    console.log("user pwd : " + this.user.pwd);
    this.toggleDisabled();
    this.userService.updateUser(this.user, this.pwdChanged).subscribe(() => {
      this.showSucces();
      this.user.pwd = null;
      this.newPwd = null;
      this.confirmPwd = null;
      this.oldMail = this.user.mail;
      sessionStorage.setItem('currentUser', JSON.stringify(this.user));
    });
  }

  showSucces() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'OK !', detail: 'Modification effectuée' });
  }

}
