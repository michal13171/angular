import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

const CONTACTS_ROUTES: Route[] = [
    {path: 'contact/:id', component: ContactDetailsComponent}
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
