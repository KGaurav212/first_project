public class MovieSearch1 {
    @AuraEnabled(cacheable=true)
    public static List<Movies__c> movieSearchMethod(String MovieName){
        List<Movies__c> Movielist = [select Name, Movie_Id__c,Langugae__c,Generes__c from Movies__c where Name=: MovieName  ];
        return Movielist;
    }
}