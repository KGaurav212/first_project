import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';

export default class NavToNewRecordWithDefaults extends NavigationMixin(LightningElement) {
    navigateToNewContactWithDefaults() {
        const defaultValues = encodeDefaultFieldValues({
            Client_Contact__c : '0035i00000Jj5D9AAJ',
            
        });

        console.log(defaultValues);

        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            },
            state: {
                defaultFieldValues: defaultValues
            }
        });
    }
}