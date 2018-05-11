import { Component, OnInit } from '@angular/core';
import { CommandService } from '../command.service';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent implements OnInit {

  formFields : {} = {'firstname' : null, 'lastname' : null, 'idClient' : 2, 'dateMin' : null, 'dateMax' : null, 'page' : 1}
  commandService : CommandService;
  constructor(commandService : CommandService) {this.commandService = commandService;}

  ngOnInit() {
  }

  onSubmit(page:number){
    this.formFields['page'] = page;
    this.commandService.getMultiCriteria(this.formFields['firstname'],this.formFields['lastname'],this.formFields['idClient'],
    this.formFields['dateMin'],this.formFields['dateMax'],this.formFields['page']).subscribe();
  }

}
