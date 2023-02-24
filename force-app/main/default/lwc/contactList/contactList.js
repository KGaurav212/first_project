import { LightningElement, wire } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';
import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import Email from '@salesforce/schema/Contact.Email';
import getContacts from '@salesforce/apex/ContactController.getContacts';
const COLUMNS = [
    { label: 'Contact Name', fieldName: FirstName },
    { label: 'Contact Revenue', fieldName: LastName},
    { label: 'Email', fieldName: Email }
];
export default class ContactList extends LightningElement {
    columns = COLUMNS;
    @wire(getContacts)
    Contact;
    get errors() {
        return (this.contacts.error) ?
            reduceErrors(this.contacts.error) : [];
    }

}