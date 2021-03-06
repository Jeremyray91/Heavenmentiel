import { Type } from "./enum-event";

export class Evenement2 {
    id: number;
    name: string;
    place: string;
    type: Type;
    dateEvent: Date;
    price: number;
    stock: number;
    description: string;
    shortDescription: string;
    available: boolean;
    img: string;
    imgMin: string;

    constructor(id:number,name: string,
                place: string, 
                type: Type,
                dateEvent: Date,
                price: number,
                stock: number,
                description: string,
                shortDescription: string,
                available: boolean,
                img: string,
                imgMin: string){
                            this.id = id;
                            this.name = name,
                            this.place = place;
                            this.type = type;
                            this.dateEvent = dateEvent;
                            this.price = price;
                            this.stock = stock;
                            this.description = description;
                            this.shortDescription =shortDescription;
                            this.available = available;
                            this.img = img;
                            this.imgMin = imgMin;
    }
}
