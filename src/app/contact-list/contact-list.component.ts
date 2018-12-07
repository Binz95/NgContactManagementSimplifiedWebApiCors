import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

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
