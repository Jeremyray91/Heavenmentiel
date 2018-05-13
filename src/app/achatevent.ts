import { Command } from "./command";
import { Event } from "./event";

export class Achatevent {
    id:number;
    event : Event;
    command : Command;
    qte:number;

    constructor(id:number,event:Event,command:Command,qte:number){
        this.id = id;
        this.event = event;
        this.command = command;
        this.qte = qte;
    }
}
