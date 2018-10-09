/*

Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example:

Input: "babad"

Output: "bab"

Note: "aba" is also a valid answer.
 

Example:

Input: "cbbd"

Output: "bb"

*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const substringTable = [];
    let max_len = 1;
    let palBeginsAt = 0;

    for(let i = 0; i < s.length; i++) {
        substringTable.push(new Array(s.length))
    }

    for(let i = 0; i < s.length; i++) {
        substringTable[i][i] = true;
    }

    for(let i = 0; i < s.length - 1; i++) {
        substringTable[i][i+1] = s[i] === s[i+1] ? true : false;
        if(substringTable[i][i+1]) {
            max_len = 2;
            palBeginsAt = i;
        }
    }

    for(let cur_len = 3; cur_len <= s.length; cur_len++) {
        for(let i = 0; i <= s.length - cur_len; i++) {
            let start = i;
            let end = start + cur_len - 1;

            if(s[start] === s[end] && substringTable[start+1][end-1]) {
                substringTable[start][end] = true;
                max_len = cur_len;
                palBeginsAt = i;
            } else {
                substringTable[start][end] = false;
            }
        }
    }

    return s.substring(palBeginsAt, palBeginsAt + max_len);
};