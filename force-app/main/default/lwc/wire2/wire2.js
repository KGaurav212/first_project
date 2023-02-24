import { LightningElement,api,wire } from 'lwc';

import wireMethod2 from '@salesforce/apex/wireClass2.wireMethod2';
const columns=[
{label : "TicketId" , fieldName : "Name"},
{label : "ShowTimmings", fieldName : "Show_Timmings__c"},
{label : "CustomerID", fieldName : "TicketCounter__c.CustomerId__r.Name"},
{label : "HallId", fieldName : "TicketCounter__c.Hall_Id__r.Name"},
{label : "Date", fieldName : "Ticket_Date__c"},
{label :"Moviename", fieldName :"TicketCounter__c.MovieName__r.Name"}             
]

export default class Wire2 extends LightningElement {
     @api col=columns   
     @api collectionname
     MovieName=''
     changeHandler(event){
this.MovieName=event.target.value

     }
    @wire(wireMethod2,{MovieName:'$MovieName'}) wirefun({data,error}){
        if(data){
            this.collectionname=data
        }else if(error){
            console.error(error)
        }
    }
    }
