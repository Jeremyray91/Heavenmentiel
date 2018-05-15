import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  msgs: Message[] = [];

  nom : string;
  prenom : string;
  mail : string;
  message : string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit()
  {
    this.nom = "";
    this.prenom ="";
    this.mail = "";
    this.message = "";
    this.showSucces();
  }

  showSucces() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Message envoyé', detail: 'Nous reviendrons vers vous prochainement ;)' });
  }

}
