// 929. Unique Email Addresses
// Easy

// 259

// 67

// Favorite

// Share
// Every email consists of a local name and a domain name, separated by the @ sign.

// For example, in alice@leetcode.com, alice is the local name, and leetcode.com is the domain name.

// Besides lowercase letters, these emails may contain '.'s or '+'s.

// If you add periods ('.') between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name.  For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.  (Note that this rule does not apply for domain names.)

// If you add a plus ('+') in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered, for example m.y+name@email.com will be forwarded to my@email.com.  (Again, this rule does not apply for domain names.)

// It is possible to use both of these rules at the same time.

// Given a list of emails, we send one email to each address in the list.  How many different addresses actually receive mails? 

 

// Example 1:

// Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
// Output: 2
// Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails

/**
 * @param {string[]} emails
 * @return {number}
 
 ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
 testemail@leetcode.com
 testemail@leetcode.com
 testemail
 
 */
var numUniqueEmails = function(emails) {
    if(!emails.length) return 0;
    const set = new Set();
    
    emails.forEach(email => {
        const _email = getLocalName(email);
        if(!set.has(_email)) set.add(_email);
    });
    
    return set.size;
};

function getLocalName(s) {
    const email = s.split('@'),
          localName = email[0].split('+')[0].split('.').join(''),
          domainName = email[1];
    
    return localName + domainName;
}