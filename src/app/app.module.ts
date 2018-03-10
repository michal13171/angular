import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactsModule } from './contacts/contacts.module';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContactsModule,
    RouterModule.forRoot([
      {path: 'contacts', component: ContactsListComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
