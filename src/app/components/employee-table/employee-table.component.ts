import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Contact } from '../../model/contacts';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
  @Input() contactList: Contact[] = [];

  constructor(
    private contactService: ContactsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  viewContact(id) {
    this.contactService.setViewContactId(id);
    this.router.navigate(['/update']);
  }

}
