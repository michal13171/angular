import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent implements OnInit {
  contactForm: FormGroup;

  firstNamePattern:
    | string
    | RegExp = '^[A-Z,Ł,Ś,Ż,Ó,Ę,Ć][a-z,ą,ę,ć,ń,ó,ś,ł]{2,15}$';
  surnamePattern:
    | string
    | RegExp = '^[A-Z,Ł,Ś,Ż,Ó,Ę,Ć][a-z,ą,ę,ć,ń,ó,ś,ł]{2,15}$';
  phonePatterns: string | RegExp = '^[0-9]{9}$';

  firstNamevalid: Boolean = true;
  surnamevalid: Boolean = true;
  phoneNumbervalid: Boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private contactsService: ContactsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.buildContactForm();
  }

  private buildContactForm() {
    this.contactForm = new FormGroup({
      surname: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.surnamePattern)
      ]),
      firstName: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.firstNamePattern)
      ]),
      phoneNumber: new FormControl(null, [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(12),
        Validators.pattern(this.phonePatterns)
      ])
    });
  }


  addContact() {
    this.contactsService
      .addContact(this.contactForm.value)
      .subscribe(() => this.router.navigate(['/contacts']));
  }
  varify() {
      this.firstNamevalid = true;
      this.surnamevalid = true;
      this.phoneNumbervalid = true;

    if (!this.contactForm.get('firstName').valid) {
        this.firstNamevalid = false;
    }
    if (!this.contactForm.get('surname').valid) {
        this.surnamevalid = false;
    }

    if (!this.contactForm.get('phoneNumber').valid) {
        this.phoneNumbervalid = false;
    }
    if (this.surnamevalid && this.firstNamevalid && this.phoneNumbervalid) {
        this.addContact();
    }
  }
}
