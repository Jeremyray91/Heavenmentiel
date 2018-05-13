import { Evenement } from "./event";

export class CartItem {
    event: Evenement;
    quantity: number;

    constructor(event: Evenement, quantity : number)
    {
        this.event = event;
        this.quantity = quantity;
    }
}
