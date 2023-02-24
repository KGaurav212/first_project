import { LightningElement,wire,track,api} from 'lwc';
import movieSearchMethod from '@salesforce/apex/MovieSearch.movieSearchMethod';
//import movieSearchMethod from '@salesforce/apex/MovieSearch1.movieSearchMethod';
export default class MovieSearch extends LightningElement {
     @track currentName;
     @track searchName;
     currentMovieName;
    handleChangeMovieName(event){
    this.currentMovieName = event.target.value;
    }
    handleMovieSearch(){
    //this.currentName = 
   
    this.searchName = this.currentMovieName
    
    }
     @api records;
     dataNotFound;
    @wire(movieSearchMethod,{keySearch:'$searchName'})
    wireRecord(data,error){
    if(data){
    this.records = data
    
    }
    else if (error){
    this.dataNotFound=error
    }
    }
}

