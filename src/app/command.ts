import { User } from "./user";
import { Achatevent } from "./achatevent";

export class Command {
    id:number;
    date:Date;
    user:User;
    achatsEvents : Array<Achatevent>;

    constructor(date:Date,user:User,achatsEvents:Array<Achatevent>){
        this.date = date;
        this.user = user;
        this.achatsEvents = achatsEvents;
    }
}
