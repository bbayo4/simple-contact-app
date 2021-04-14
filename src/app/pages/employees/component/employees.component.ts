import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Contact } from '../../../model/contacts';
import { ContactsService } from '../../../services/contacts.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  contactList: Contact[] = [];
  show = false;

  constructor(
    private contactService: ContactsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const promise = this.contactService.getAllContacts();
    promise.then(
      response => {
        this.contactList = response['res'];
      },
      error => {
        console.log('error ' + error);
      }
    );
  }

  editContact(contact) {
    console.log('update contact ' + JSON.stringify(contact));
  }

  deleteContact(id) {
    console.log('delete contact ' + id);
  }

  viewContact(id) {
    this.contactService.setViewContactId(id);
    this.router.navigate(['/update']);
  }

  showModal() {
    this.show = !this.show;
  }

}
