export class Event {
    id:number;
    name:String;
    date:Date;
    place:String;
    type:String;
    stock:number;
    available:boolean;
    price:number;
    img:String;
    description:String;
    constructor(id:number,name:String, date:Date,place:String,type:String,stock:number,available:boolean,price:number, img:String, description:String){
        this.id = id;
        this.name = name,
        this.date = date;
        this.place = place;
        this.type = type;
        this.stock = stock;
        this.available = available;
        this.price = price;
        this.img = img;
        this.description = description;
    }
}
