import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ContactModel } from '../models/contact-model';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {
  private baseApiUrl = 'http://www.contactapi.pl';

  constructor(private http: Http) {}

  getContacts(): Observable<ContactModel[]> {
    return this.http
      .get(this.baseApiUrl + '/contacts')
      .map(result => result.json());
  }
  getContact(id: number): Observable<ContactModel[]> {
    return this.http
      .get(this.baseApiUrl + '/contact/' + id)
      .map(result => result.json());
  }
}
