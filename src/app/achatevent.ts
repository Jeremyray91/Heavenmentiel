import { Command } from "./command";
import {Evenement} from "./event";

export class Achatevent {
    id:number;
    event : Evenement;
    command : Command;
    qte:number;

    constructor(event:Evenement,command:Command,qte:number){
        this.event = event;
        this.command = command;
        this.qte = qte;
    }
}
