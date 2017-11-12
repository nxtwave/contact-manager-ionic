import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Contact } from './contact.model';

@Injectable()
export class ContactsProvider {

  /**
   * Class constructor
   * @param {HttpClient} http
   */
  constructor(public http: HttpClient) {}

  /**
   * Retrieves contact-list list
   * @returns {Observable<Contact[]>}
   */
  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>('/assets/data/contacts.json');
  }

}
