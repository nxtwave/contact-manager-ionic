import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import {ContactDetailsPage} from '../contact-details/contact-details';
import {Contact} from '../../providers/contacts/contact.model';
import {ContactsProvider} from "../../providers/contacts/contacts";

@Component({
  selector: 'page-list',
  templateUrl: 'contact-list.html'
})
export class ContactListPage implements OnInit{

  /**
   * Contacts observable
   */
  contacts$: Observable<Contact[]>;

  /**
   * Constructor
   * @param {NavController} navCtrl
   * @param {NavParams} navParams
   * @param {ContactsProvider} provider
   */
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public provider: ContactsProvider) {}

  /**
   * Initialize, retrieve contact-list data
   */
  ngOnInit() {
    this.contacts$ = this.provider.getContacts();
  }

  itemTapped(event, contact) {
    this.navCtrl.push(ContactDetailsPage, {
      contact: contact
    });
  }


}
