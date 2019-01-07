// 151. Reverse Words in a String
// Medium

// 412

// 1976

// Favorite

// Share
// Given an input string, reverse the string word by word.

// Example:  

// Input: "the sky is blue",
// Output: "blue is sky the".
// Note:

// A word is defined as a sequence of non-space characters.
// Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
// You need to reduce multiple spaces between two words to a single space in the reversed string.

// Follow up: try to solve it in-place in O(1) space.

// First solution: one-liner ES6 w/ O(n) space
var reverseWords = function(str) {
    return str.split(' ').filter(word => word.length > 0).reverse().join(' ');
};

// Second solution to answer followup
