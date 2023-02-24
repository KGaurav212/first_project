import { LightningElement } from 'lwc';
import{NavigationMixin} from 'lightning/navigation'
import{encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'
export default class BlockTickets extends NavigationMixin(LightningElement) {
    

    handeltickets(){
        alert('hi');
       const defaultvalues = encodeDefaultFieldValues({
            Hall_Id__c : 'a0T5i000003C7GqEAK'
        });
this[NavigationMixin.Navigate]({
    type:'standard__objectPage',
    attributes:{
        objectApiName:'TicketCounter__c',
        actionName:'new'
    },
    state :{
        defaultFieldValues : defaultvalues
    }
});
    }
}