// 139. Word Break
// Medium

// 1712

// 102

// Favorite

// Share
// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:

// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
//              Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 
 [l,  e,  e,  t,  c,  o,  d,  e]             ["leet", "code"]           [T,  F,  F,  F,  T,  F,  F,  F]
  0   1   2   3   4   5   6   7                                          0   1   2   3   4   5   6   7
                          i
      j
  
  l | eetcode
  
  le | etcode
  e | etcode
 
 lee | tcode
 ee | tcode
 e | tcode
 
 leet | code
 
 leetc | ode
 eetc | ode
 etc | ode
 tc | ode
 c | ode
 
 leetco | de
 eetco | de
 
 */
var wordBreak = function(s, wordDict) {
    const set = new Set(wordDict);
    let len = s.length;
    const dp = [true];

    for(let i = 1; i <= s.length; i++) {
        for(let j = 0; j < i; j++) {
            if(dp[j] && set.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[len] === true;
};