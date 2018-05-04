export class Event {
    name: String;
    place: String;
    type: String;
    dateEvent: Date;
    price: number;
    stock: number;
    description: String;
    shortDescription: string;
    available: boolean;
    img: String;

    constructor(name: String,
                place: String, 
                type: String,
                dateEvent: Date,
                price: number,
                stock: number,
                description: String,
                shortDescription: string,
                available:boolean,
                img:String){
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
    }
}
