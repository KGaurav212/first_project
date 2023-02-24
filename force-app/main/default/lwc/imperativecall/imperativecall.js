import { LightningElement} from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class Imperativecall extends NavigationMixin(LightningElement) {
 Book_the_Ticket = 'Damaka Movie';
 onchangehandler1(event){
    this.Book_the_Ticket=event.target.value

    this[NavigationMixin.Navigate]({
        type: 'standard__objectPage',
            attributes: {
                objectApiName: 'TicketCounter__c',
                actionName: 'new'
            }
    })
 }
}