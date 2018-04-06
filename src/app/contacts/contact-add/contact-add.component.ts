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
  firstNamePattern: string | RegExp = '^[A-z]{3,15}$';
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
      surname: new FormControl(null, Validators.required),
      firstName: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.firstNamePattern)
      ]),
      phoneNumber: new FormControl(null, [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(12)
      ])
    });
  }
  isFieldValid(field: string) {
    return !this.contactForm.get(field).valid && this.contactForm.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
  addContact() {
    if (this.contactForm.valid) {
      this.contactsService
        .addContact(this.contactForm.value)
        .subscribe(() => this.router.navigate(['/contacts']));
    } else {
      this.validateAllFormFields(this.contactForm);
    }
  }
}
