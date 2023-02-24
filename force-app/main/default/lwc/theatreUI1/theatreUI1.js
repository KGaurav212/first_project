import { LightningElement } from 'lwc';
import{NavigationMixin} from 'lightning/navigation'
import{encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'

export default class TheatreUI extends NavigationMixin(LightningElement) {


    
    navigateToRecordPage(){
        //document.querySelector('.greenseat').style.color = "green";
        // document.quer
        alert('hi');
        
       const defaultvalues = encodeDefaultFieldValues({
            Hall_Id__c : 'a0T5i000003C7GqEAK',
            MovieName__c : 'a0O5i000002tpeSEAQ',
            CustomerId__c : 'a0V5i0000083kYCEAY'
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

    handleclick(){
        const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        console.log(seat.classList.add("selected"));
      }
    });
  }
    }

}