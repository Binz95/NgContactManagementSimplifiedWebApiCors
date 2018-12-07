import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts : Contact[];
  contact : Contact;
  constructor(private contactService: ContactService) { 
 
  }
  ngOnInit() {
    this.newContactData();
    this.getContacts();
  }
  newContactData(): void{
    this.contact= {
      ContactId: 0,
      ContactName : '',
      Location: ''
    };
    }
  getContacts(): void{
   // this.batches=this.batchService.getBatchesMockData();
   this.contactService.getContacts()
   .subscribe(b=> this.contacts=b);
    }
    saveContactData():void{
      this.contactService.saveContact(this.contact)
      .subscribe(b=>this.contacts.push(b));
    }
}
