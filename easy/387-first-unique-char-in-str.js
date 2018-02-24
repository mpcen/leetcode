/*

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.

*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const ht = {};
    
    if(s.length === 1) {
        return 0;
    }
    
    for(let i = 0; i < s.length; i++) {
        if(!ht[s.charAt(i)]) {
            ht[s.charAt(i)] = {index: i, count: 1};
        } else {
            ht[s.charAt(i)].count++;
        }
    }
    
    for(c in ht) {
        if(ht[c].count === 1) {
            return ht[c].index;
        }
    }
    
    return -1;
};