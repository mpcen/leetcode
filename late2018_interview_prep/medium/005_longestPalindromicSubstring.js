// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"


var longestPalindrome = function(s) {
    if(s.length === 1) return s;
    
    let maxLength = 1, beginsAt = 0, currentLength = 3;
    let matrix = [];
    
    for(let i = 0; i < s.length; i++) matrix.push(new Array(s.length));
    for(let i = 0; i < s.length; i++) matrix[i][i] = true;
    for(let i = 0; i < s.length - 1; i++) {
        if(s.charAt(i) === s.charAt(i+1)) {
            maxLength = 2;
            beginsAt = i;
            matrix[i][i+1] = true;
        } else matrix[i][i+1] = false;
    }
    
    while(currentLength <= s.length) {
        for(let i = 0; i <= s.length - currentLength; i++) {
            const str = s.substring(i, i+currentLength);
            if(str.charAt(0) === str.charAt(str.length - 1) && matrix[i+1][i + currentLength - 2]) {
                beginsAt = i;
                maxLength = currentLength;
                matrix[i][currentLength - 1 + i] = true;
            } else matrix[i][currentLength - 1 + i] = false;
        }
        currentLength++;
    }
    
    return s.substring(beginsAt, beginsAt + maxLength);
};