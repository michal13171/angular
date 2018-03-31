import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ContactModel } from '../models/contact-model';
import { Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {

  private baseApiUrl = 'http://www.contactapi.pl';

  constructor(private http: Http) { }

  getContacts(): Observable<ContactModel[]> {
    return this.http.get(this.baseApiUrl + '/contacts').map((result) => result.json());
  }
  getContact(id: number): Observable<ContactModel> {
    return this.http.get(this.baseApiUrl + '/contact/' + id).map((result) => result.json());
  }
  addContact(data): Observable<ContactModel> {
    return this.http.post(this.baseApiUrl + '/contact/add', data).map((res) => res.json());
  }
  editable(id: number): Observable<ContactModel> {
    const firstObject = JSON.parse(id.toString());
    const sec = JSON.stringify(firstObject);
    return this.http.put(this.baseApiUrl + '/product/update/' + id, sec).map((res) => res.json());
  }
  removeContact(id: Number): Observable<ContactModel> {
    return this.http.delete(this.baseApiUrl + '/contact/' + id).map((res) => res.json());
  }
}
