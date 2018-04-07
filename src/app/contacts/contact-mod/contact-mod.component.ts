import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactModel } from '../../models/contact-model';

@Component({
  selector: 'app-contact-mod',
  templateUrl: './contact-mod.component.html',
  styleUrls: ['./contact-mod.component.scss']
})
export class ContactModComponent implements OnInit {
  contactForm: FormGroup;
  contact: ContactModel;
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
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadContacts();
    this.buildContactForm();
  }

  private buildContactForm() {
    this.contactForm = new FormGroup({
      surname: new FormControl(this.contact[0].surname, [
        Validators.required,
        Validators.pattern(this.surnamePattern)
      ]),
      firstName: new FormControl(this.contact[0].firstName, [
        Validators.required,
        Validators.pattern(this.firstNamePattern)
      ]),
      phoneNumber: new FormControl(this.contact[0].phoneNumber, [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(12),
        Validators.pattern(this.phonePatterns)
      ])
    });
  }

  loadContacts() {
    this.contact = this.route.snapshot.data['contact'];
  }

  updateContact() {
    this.contactsService.editable(this.contact[0].id, this.contactForm.value).subscribe(() => this.router.navigate(['/contacts']));
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
      this.updateContact();
    }
  }
}
