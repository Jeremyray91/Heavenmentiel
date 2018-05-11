import { User } from "./user";
import { Achatevent } from "./achatevent";

export class Command {
    id:number;
    date:Date;
    user:User;
    achatsEvents : Array<Achatevent>;

    constructor(id:number,date:Date,user:User,achatsEvents:Array<Achatevent>){
        this.id = id;
        this.date = date;
        this.user = user;
        this.achatsEvents = achatsEvents;
    }
}
