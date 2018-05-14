import { Component, OnInit, Input } from '@angular/core';
import { Command } from '../command';
import { Achatevent } from '../achatevent';
import { Evenement } from '../event';
import { Type } from '../enum-event';
import { ActivatedRoute } from '@angular/router';
import { CommandService } from '../command.service';

@Component({
  selector: 'app-display-order',
  templateUrl: './display-order.component.html',
  styleUrls: ['./display-order.component.css']
})
export class DisplayOrderComponent implements OnInit {

  private sub: any;
  idCommande : number;
  commande : Command = new Command(null,null,null);
  //events : Array<Evenement> = new Array<Evenement>();
  total:number = 0;

  constructor(private route : ActivatedRoute, private commandService : CommandService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idCommande = +params['id'];
      this.commandService.getById(this.idCommande).subscribe(command => {
        this.commande = command;
        for(let achat of command.achatsEvents){
          this.total = this.total + (achat.qte*achat.event.price);
        }
        /*for(let achat of command.achatsEvents){
          this.events = [...this.events,achat.event];
        }*/
      });
    });

  }
}
