import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../../models/contact-model';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';
// import { CONTACTS } from '../../data/contacts-data';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  contacts: ContactModel[];
  contactsCount: Number;

  constructor(private contactsService: ContactsService, private router: Router) {}

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
    this.contactsService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
      this.contactsCount = contacts.length;
    });
  }
  removeContact(contact: ContactModel, event: Event) {
    event.stopPropagation();
    const conf = confirm('Wywalic zostawic');
    if (conf) {
      this.contactsService.removeContact(contact.id).subscribe(() => this.loadContacts());
    }
  }
    editable(contact: ContactModel, event: Event) {
      event.stopPropagation();
      this.router.navigate(['/contact-mod', contact.id]);
  }
}
