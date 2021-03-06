/*

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    
    for(char of s) {        
        if(char === '(') {
            stack.push(')')
        } else if(char === '{') {
            stack.push('}');
        } else if(char === '[') {
            stack.push(']');
        } else {
            if(stack.pop() !== char) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};