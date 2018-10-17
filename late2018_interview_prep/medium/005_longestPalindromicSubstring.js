// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"


const longestPalindrome = s => {
    const dp = [];
    let maxLength = 1, longestPal = s.charAt(0);

    // build empty dp matrix
    for(let i = 0; i < s.length; i++) {
        dp.push(new Array(s.length))
    }

    // set 1-char values to true
    for(let i = 0; i < s.length; i++) {
        dp[i][i] = true;
    }

    // check for 2-char values since you can't look up the prev values (next row, prev col)
    for(let i = 0; i < s.length - 1; i++) {
        const str = s.substring(i, i + 2);
        
        dp[i][i+1] = str.charAt(0) === str.charAt(1) ? true : false;

        if(dp[i][i+1]) {
            longestPal = str;
            maxLength = 2;
        }
    }

    
    for(let currentLength = 3; currentLength <= s.length; currentLength++) {
        for(let j = 0; j <= s.length - currentLength; j++) {
            const str = s.substring(j, j + currentLength);

            // if first and last chars match AND the prev value was a palindrome, do the thing
            dp[j][currentLength - 1 + j] =
                str.charAt(0) === str.charAt(str.length - 1) && dp[j+1][j+currentLength - 2] ? true : false
            
            if(dp[j][currentLength - 1 + j]) {
                maxLength = str.length;
                longestPal = str;
            }
            
        }   
    }

    return longestPal;
}