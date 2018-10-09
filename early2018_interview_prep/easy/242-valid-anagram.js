/*

Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(!s && !t) {
        return true;
    } else if(!s && t || s.length !== t.length) {
        return false;
    }
    
    const ht = {};
    
    for(let i = 0; i < s.length; i++) {
        if(!ht[s.charAt(i)]) {
            ht[s.charAt(i)] = 1;
        } else {
            ht[s.charAt(i)]++
        }
    }
    
    for(let i = 0; i < t.length; i++) {
        if(!ht[t.charAt(i)]) {
            return false;
        } else {
            ht[t.charAt(i)]--;
        }
    }
    
    for(let c in ht) {
        if(ht[c] !== 0) {
            return false;
        }
    }
    
    return true;
};