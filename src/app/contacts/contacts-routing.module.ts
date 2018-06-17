import { AuthGuard } from './../auth/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactModComponent } from './contact-mod/contact-mod.component';
import { ContactResolveService } from './contact-resolve.service';

const CONTACTS_ROUTES: Route[] = [
  { path: 'contact/:id', component: ContactDetailsComponent, canActivate: [AuthGuard] },
  { path: 'contact-add', component: ContactAddComponent, canActivate: [AuthGuard] },
  { path: 'contact-mod/:id', component: ContactModComponent, resolve: {contact: ContactResolveService }, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [
        RouterModule.forChild(CONTACTS_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})

export class ContactsRoutingModule {}
