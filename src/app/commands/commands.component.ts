import { Component, OnInit } from '@angular/core';
import { CommandService } from '../command.service';
import { Command } from '../command';
import { Evenement} from '../event';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent implements OnInit {

  formFields : {} = {'firstname' : null, 'lastname' : null, 'idClient' : null, 'dateMin' : null, 'dateMax' : null, 'page' : 1}
  commandService : CommandService;
  constructor(commandService : CommandService) {this.commandService = commandService;}
  commands : Array<Object>;

  ngOnInit() {
  }

  onSubmit(page:number){
    this.commands = new Array<Object>();
    let formattedCommand : Object;
    this.commandService.getMultiCriteria(this.formFields['firstname'],this.formFields['lastname'],this.formFields['idClient'],
    this.formFields['dateMin'],this.formFields['dateMax'],this.formFields['page']).subscribe(commands => {
      for(let cmd of commands){
        let totalPrice = 0;
        let totalQte = 0;

        for(let achat of cmd.achatsEvents){
          let e : Evenement = achat.event;
          totalQte = totalQte + achat.quantite;
          totalPrice = totalPrice + (e.price*achat.quantite);
        }
        formattedCommand = {'id' : cmd.id, 'date' : cmd.date, 'user' : cmd.user.firstName+' '+cmd.user.lastName, 'nbEvents' : totalQte, 'totalPrice' : totalPrice+"€", 'editButton' : '<a [routerLink]="[\'/DisplayOrder\', '+cmd.id+']" ><button pButton type="button" icon="fa fa-fw fa-wrench" class="ui-button-warning"></button></a>'};
      }
      this.commands = [...this.commands,formattedCommand];
    });
  }

}
