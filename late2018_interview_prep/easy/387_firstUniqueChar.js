// 387. First Unique Character in a String
// Easy

// 782

// 67

// Favorite

// Share
// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.


/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if(!s.length) return -1;
    if(s.length === 1) return 0;
    
    const map = new Map();
    
    for(let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        
        if(!map.has(char)) map.set(char, { i, count: 0 });
        
        map.set(char, { i: map.get(char).i, count: map.get(char).count + 1 })
    }
    
    let i = -1, found = false;
    
    for(let [key, val] of map) {
        if(val.count === 1 && !found) {
            i = val.i;
            found = true;
        }
    }
    
    return i;
};