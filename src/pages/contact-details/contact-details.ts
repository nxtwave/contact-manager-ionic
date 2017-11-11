import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import {Contact} from '../../providers/contacts/contact.model';

@Component({
  selector: 'page-contact-details',
  templateUrl: 'contact-details.html'
})
export class ContactDetailsPage {
  selectedContact: Contact;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedContact = navParams.get('contact');
  }

}
