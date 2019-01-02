// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

// O(n) solution
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0 || s.length === 1) return s.length;
    
    const set = new Set();
    let longest = 0, current = 0;
    
    for (let i = 0; i < s.length; i++) {
        if(!set.has(s.charAt(i))) {
            set.add(s.charAt(i));
            current++;
            
            if(current > longest) longest = current;
        } else {
            for(let char of set) {
                set.delete(char);
                current--;
                
                if(char === s.charAt(i)) break;
            }
            
            set.add(s.charAt(i));
            current++;
        }
    }
    
    return longest
};
/**
 * @param {string} s
 * @return {number}
 
 
 p w w k e w
     i
       j
 
 { p, w }
 longest = 2
 
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0 || s.length === 1) return s.length;
    
    const set = new Set();
    let longest = 0, current = 0;
    
    for (let i = 0; i < s.length - 1; i++) {
        set.clear();
        set.add(s.charAt(i));
        current = 1;
        if(current > longest) longest = current;
        
        for (let j = i + 1; j < s.length; j++) {
            if(!set.has(s.charAt(j))) {
                set.add(s.charAt(j));
                current++;
                
                if(current > longest) longest = current;
            } else break;
        }
    }
    
    return longest
};