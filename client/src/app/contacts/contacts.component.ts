import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service'
import {Contact} from '../contact'


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers:[ContactService]
})
export class ContactsComponent implements OnInit {
  contacts: any;
  first_name: any;
  last_name: any;
  phone: any;
  n:any;
  //'contacts': Object;

  constructor(private contactService: ContactService) { }

  addContact(){
    const newContact = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone

    }
    this.contactService.addContact(newContact).subscribe(contact=>{
      this.contacts.push(contact)
      
    this.contactService.getContacts()
    .subscribe(contacts => {
      this.contacts = contacts})
    })
  }

  deleteContact(id:any)
  {
    var contacts = this.contacts
    this.contactService.deleteContact(id).subscribe(data=>{
      console.log(data)
      if(data){
        for (var i = 0; i<this.contacts.length; i++){
          if(contacts[i]._id == id){
            contacts.splice(i, 1);
          }
        }
      }
    })
  }
  ngOnInit(): void {
    this.contactService.getContacts()
    .subscribe((contacts) => {
      this.contacts = contacts
    })

  }

}
