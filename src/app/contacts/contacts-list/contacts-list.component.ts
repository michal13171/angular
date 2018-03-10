import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../../models/contact-model';
import { CONTACTS } from '../../data/contacts-data';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  contacts: ContactModel[] = CONTACTS;
  contactsCount: Number = this.contacts.length;


  constructor() { }

  ngOnInit() {
  }

  hideContacts() {
    this.contacts = [];
    this.contactsCount = 0;
  }

  showContacts() {
    this.contacts = CONTACTS;
    this.contactsCount = this.contacts.length;
  }

}
