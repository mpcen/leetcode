/*

Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".

*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    let newStr = '';
    
    for(let i = 0; i < s.length; i++) {
        newStr = s[i] + newStr;
    }
    
    return newStr;
};