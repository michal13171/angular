import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private contactsService: ContactsService, private router: Router) { }

  ngOnInit() {
        this.buildContactForm();
  }
    private buildContactForm() {
    this.contactForm = new FormGroup({
      surname: new FormControl(),
      firstName: new FormControl(),
      phoneNumber: new FormControl()
    });

}
  editable() {
    this.contactsService.editable(this.contactForm.value).subscribe(() => this.router.navigate(['/contacts']));
  }
}
