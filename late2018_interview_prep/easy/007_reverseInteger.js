// 7. Reverse Integer
// Easy

// 1853

// 2653

// Favorite

// Share
// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const reversed = parseInt(x.toString().split('').reverse().join(''));
    
    if(reversed < Math.pow(2, 31) * -1 || reversed > Math.pow(2,31) - 1) return 0;
    else if(x < 0) return reversed * -1;
    return reversed;
};

// Another solution that has same runtime but easier to understand, i think
var reverse = function(x) {
    if(x === 0) return 0;
    
    const MIN = -2147483648,
          MAX = 2147483647,
          isNeg = x < 0;
    
    if(isNeg) x *= -1;
    
    let reversed = parseInt(x.toString().split('').reverse().join(''));
    
    reversed *= isNeg ? -1 : 1;
    
    if(reversed <= MIN || reversed >= MAX) return 0;
    
    return reversed;
};