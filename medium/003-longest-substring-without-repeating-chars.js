/*

Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let highestCount = 0;
    let count = 0;
    let finalSubStr = '';
    
    for(let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        
        if(!set.has(char)) {
            set.add(char);
            count++;
            
            if(count > highestCount) {
                highestCount = count;
            }
        } else {
            for(let _char of set) {
                set.delete(_char);
                
                count--;
                
                if(_char === char) {
                    break;
                }
            }
            
            set.add(char);
            count++;
        }
    }
    
   return highestCount;
};