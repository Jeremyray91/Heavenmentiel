import { Event } from "./event";

export class CartItem {
    event: Event;
    quantity: number;

    constructor(event: Event, quantity : number)
    {
        this.event = event;
        this.quantity = quantity;
    }
}
