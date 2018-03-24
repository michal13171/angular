import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../../models/contact-model';
import { ContactsService } from '../contacts.service';
// import { CONTACTS } from '../../data/contacts-data';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  contacts: ContactModel[];
  contactsCount: Number;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.loadContacts();
  }

  hideContacts() {
    this.contacts = [];
    this.contactsCount = 0;
  }

  showContacts() {
    this.loadContacts();
  }

  loadContacts(): void {
    this.contactsService.getContacts().subscribe((contacts) => {
      this.contacts = contacts;
      this.contactsCount = contacts.length;
    });
  }
}
