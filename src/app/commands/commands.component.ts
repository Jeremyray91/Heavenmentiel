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
  commands : Array<Object> = new Array();

  ngOnInit() {
  }

  onSubmit(page:number){
    this.formFields['page'] = page;
    this.commandService.getMultiCriteria(this.formFields['firstname'],this.formFields['lastname'],this.formFields['idClient'],
    this.formFields['dateMin'],this.formFields['dateMax'],this.formFields['page']).subscribe(commands => {
      for(let cmd of commands){
        let totalPrice = 0;
        let qte = 0;
        for(let achat of cmd.achatsEvents){
          let e : Evenement = achat.event;
          qte = qte +achat.qte;
          totalPrice+=(e.price*achat.qte);
        }
        let o = {'id' : cmd.id, 'date' : cmd.date, 'user' : cmd.user.firstName+' '+cmd.user.lastName, 'nbEvents' : qte, 'totalPrice' : totalPrice};
        this.commands.push(o);
        console.log(this.commands);
      }
    });
  }

}
