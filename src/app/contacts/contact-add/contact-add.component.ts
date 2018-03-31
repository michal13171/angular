import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder, private contactsService: ContactsService, private router: Router) { }

  ngOnInit() {
    this.buildContactForm();
  }

  private buildContactForm() {
    this.contactForm = new FormGroup({
      surname: new FormControl('', Validators.required),
      firstName: new FormControl('', [Validators.required, Validators.pattern(this.firstNamePattern)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(12)])
    });
  }

  addContact() {
    this.contactsService.addContact(this.contactForm.value).subscribe(() => this.router.navigate(['/contacts']));
  }

}
