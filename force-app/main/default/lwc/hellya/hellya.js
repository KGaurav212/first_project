import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class Hellya extends NavigationMixin(LightningElement) {

    navigateToWebPage(){
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                "url": "https://c360-bf-dev-ed.lightning.force.com/lightning/n/Booking_Site"
            }
        });

    }
}