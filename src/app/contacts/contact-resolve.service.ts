import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ContactModel } from '../models/contact-model';
import { ContactsService } from './contacts.service';

@Injectable()
export class ContactResolveService implements Resolve<ContactModel> {

  constructor(private contactsService: ContactsService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.contactsService.getContact(route.params['id']);
  }
}
