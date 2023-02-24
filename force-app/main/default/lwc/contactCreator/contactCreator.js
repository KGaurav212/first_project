import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
//import { createRecord } from 'lightning/uiRecordApi';
 import CONTACT_OBJECT from '@salesforce/schema/Contact';
 import FirstName from '@salesforce/schema/Contact.Name';
 import LastName from '@salesforce/schema/Contact.LastName';
 import Email from '@salesforce/schema/Contact.Email';
 //const Fields=[CONTACT_NAME_FIELD.Name,CONTACT_LASTNAME_FIELD.LastName,CONTACT_EMAIL_FIELD.Email]
export default class ContactCreator extends LightningElement {
     objectApiName = CONTACT_OBJECT;
     Fields=[FirstName,LastName,Email];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
                        title: "Contact created",
                        message: "Record ID: " + event.detail.id,
                        variant: "success"
                    });
                    this.dispatchEvent(toastEvent);
                }
        //  const recordInput = {
        //    apiName: CONTACT_OBJECT,
        //   myfields: Fields
        //  };
        // createRecord(recordInput)
        //     .then(Contact=> {
        //         // code to execute if create operation is successful
        //         const toastEvent = new ShowToastEvent({
        //             title: "Contact created",
        //             message: "Record ID: " + event.detail.id,
        //             variant: "success"
        //         });
        //         this.dispatchEvent(toastEvent);
        //     })
        //     .catch(error => {
        //         // code to execute if create operation is not successful
        //     });
    }
