import { AuthGuard } from './auth/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactsModule } from './contacts/contacts.module';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { AppRoutingModule } from './app-routing-module';
import { ContactsService } from './contacts/contacts.service';
import { HttpModule } from '@angular/http';
import { LoginModule } from './login/login.module';
import { AuthService } from './login/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './login/interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContactsModule,
    AppRoutingModule,
    HttpModule,
    LoginModule,
    HttpClientModule
  ],
  providers: [ContactsService, AuthService, AuthGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
