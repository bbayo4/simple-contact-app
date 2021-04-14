import { Injectable } from '@angular/core';
import { contactList } from '../data/contacts';
import { Contact } from '../model/contacts';

@Injectable()
export class ContactsService {
  viewContactId: number;
  contact: Contact;
  contactList: Contact[] = contactList;
  constructor() { }

  getAllContacts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { res: this.contactList };
        resolve(data);
      }, 2000);
    });
  }

  getContactById(id) {
    this.contact = this.contactList.find(cus => cus.id === id);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.contact);
      }, 2000);
    });
  }

  setViewContactId(id) {
    this.viewContactId = id;
  }

  getViewContactId() {
    return this.viewContactId;
  }

}
