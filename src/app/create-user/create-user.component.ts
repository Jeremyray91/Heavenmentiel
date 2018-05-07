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
  model : User = new User("", "", null, "", 0, "", "", 0, "", "");

  constructor(userService : UserService) {
    this.userService = userService;
   }

  ngOnInit() {
  }

  onSubmit(){
    this.userService.createUser(this.model).subscribe();
    this.model = new User("", "", null, "", 0, "", "", 0, "", "");
  }

}
