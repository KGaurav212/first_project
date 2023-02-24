import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class Bookingdemocarousel extends NavigationMixin(LightningElement) {

    navigationmethod(){
    this[NavigationMixin.Navigate]({
        type: 'standard__objectPage',
        attributes: {
            objectApiName: 'Account',
            actionName: 'new'
        }
    })
}
}