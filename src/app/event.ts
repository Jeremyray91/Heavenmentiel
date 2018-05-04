import { Type } from "./enum-event";


export class Event {
    name: String;
    place: String;
    type: Type;
    dateEvent: Date;
    price: number;
    stock: number;
    description: String;
    shortDescription: string;
    available: boolean;
    img: String;
    imgMin: string;

    constructor(name: String,
                place: String, 
                type: Type,
                dateEvent: Date,
                price: number,
                stock: number,
                description: String,
                shortDescription: string,
                available:boolean,
                img:String,
                imgMin: string){
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
