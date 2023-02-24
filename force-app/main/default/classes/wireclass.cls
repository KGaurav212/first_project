public with sharing class wireclass {
    @AuraEnabled(Cacheable = true)
    public static List<Account>  wireMethod(){
            List<Account> acclist = [select id,Name,AccountNumber,AnnualRevenue,BillingAddress,	Rating from Account];
            return acclist;
    }
}
