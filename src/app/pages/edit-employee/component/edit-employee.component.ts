import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  updateContactForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private contactService: ContactsService
  ) {
    this.updateContactForm = this.formBuilder.group({
      id: [''],
      fname: [{ value: '', disabled: true}],
      lname: [{ value: '', disabled: true }],
      address: [],
      city: [{ value: '', disabled: true }],
      zipcode: [{ value: '', disabled: true }],
      fullname: [],
      email: [{ value: '', disabled: true }, Validators.email],
      title: [{ value: '', disabled: true }],
      phone: ['']
    });
  }

  ngOnInit(): void {
    const promise = this.contactService.getContactById(
      this.contactService.getViewContactId()
    );
    promise.then(
      response => {
        this.updateContactForm.controls['id'].setValue(response['id']);
        this.updateContactForm.controls['fname'].setValue(response['fname']);
        this.updateContactForm.controls['lname'].setValue(response['lname']);
        this.updateContactForm.controls['address'].setValue(response['address']);
        this.updateContactForm.controls['city'].setValue(response['city']);
        this.updateContactForm.controls['zipcode'].setValue(response['zipcode']);
        this.updateContactForm.controls['fullname'].setValue(response['fullname']);
        this.updateContactForm.controls['email'].setValue(response['email']);
        this.updateContactForm.controls['title'].setValue(response['title']);
        this.updateContactForm.controls['phone'].setValue(response['phone']);
      },
      error => {
        console.log('error ' + error);
      }
    );
  }

  updateContact() {
    console.log(
      'update Customer ' + JSON.stringify(this.updateContactForm.value)
    );
  }

  cancelEdit(){
    this.router.navigate(['/employees']);
  }

}
