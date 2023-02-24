public class MovieSearch {
    @AuraEnabled(cacheable=true)
    public static List<Movies__c> movieSearchMethod(String keySearch){
        List<Movies__c> Movielist = [select Name, Movie_Id__c,Langugae__c,Generes__c from Movies__c where Name=: keySearch];
        return Movielist;
    }

}