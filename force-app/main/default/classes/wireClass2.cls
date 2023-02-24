public with sharing class wireClass2 {
    @AuraEnabled (cacheable = true)
   public static List<TicketCounter__c> wireMethod2(String MovieName){
       
       List<TicketCounter__c> ticketlist = [select CustomerId__r.Name,Hall_Id__r.Name,MovieName__r.Name,Show_Timmings__c,Name,Ticket_Date__c from TicketCounter__c where Name =: MovieName];
       return ticketlist ;       
   }
  
}