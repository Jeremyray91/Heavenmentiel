import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event';
import { Type } from '../enum-event';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event : Event;
  category : string ;

  constructor(private eventService : EventService) {
    this.eventService = eventService;
  }

  ngOnInit() {
    this.event = new Event(
      "Evenement 1",
      "Toulouse",
      Type.CINEMA,
      new Date('05/06/2018'),
      10,
      10,
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.",
      true, 
      "assets/img_carousel/slide1.jpg",
      "assets/img_miniature/min1.jpg"
    )
    this.category = this.event.type.toLocaleString();
    console.log("category : " + this.category);
      //id :1, name: "event1", date: new Date('05/06/2018'), place: "Toulouse", type: 0, description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.", shortDescription: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.", stock: 10, available: true, price: 10, img: ""
    //this.eventService.getEventById(1).subscribe(evt => this.event = evt);
    console.log(this.event);
  }

}
