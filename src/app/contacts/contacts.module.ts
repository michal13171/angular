import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsCountComponent } from './contacts-count/contacts-count.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ContactsListComponent],
  declarations: [ContactsListComponent, ContactsCountComponent]
})
export class ContactsModule { }
