import { Command } from "./command";
import {Evenement} from "./event";

export class Achatevent {
    id:number;
    event : Evenement;
    command : Command;
    qte:number;

    constructor(id:number,event:Evenement,command:Command,qte:number){
        this.id = id;
        this.event = event;
        this.command = command;
        this.qte = qte;
    }
}
