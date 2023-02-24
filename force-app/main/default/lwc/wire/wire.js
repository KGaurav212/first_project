import { LightningElement,wire ,api } from 'lwc';
import wireMethod from '@salesforce/apex/wireclass.wireMethod'

export default class Wire extends LightningElement {
    @api col=[{label:"AccountName",fieldName:"Name"},
{label:"AccountRevenue",fieldName:"AnnualRevenue"},
{label:"AccountRating",fieldName:"Rating"}]
@api accountRecords;
@wire(wireMethod) accfun({data,error}){
    if(data){
        this.accountRecords=data
    }
    else if(error){
        console.log(error)
    }
};

}
