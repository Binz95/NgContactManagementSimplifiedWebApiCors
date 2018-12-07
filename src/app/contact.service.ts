import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Contact} from './contact';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[];
  constructor(private httpClient : HttpClient) { 

  }
  getContacts() : Observable<Contact[]>{
    return this.httpClient.get<Contact[]>("http://localhost:50477/api/contacts");
  }
  getContactsMockData(): Contact[]{
    this.contacts = [{
      ContactId : 1,
      ContactName : 'Bini',
      Location : 'Puthusserry'
    }];
    return this.contacts;
  }
  saveContact(contact:Contact): Observable<Contact>{
    const header = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.httpClient.post<Contact>("http://localhost:50477/api/contacts", contact, { headers: header});
  }
}
