// 22. Generate Parentheses
// Medium
// 1963
// 125


// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if(n === 0) return [];
    
    let arr = makeNParens(n),
        current = [],
        chosen = new Set(),
        tried = new Set();
    
    permute(arr, current, chosen, tried);
    
    return [...chosen];
};

console.log(generateParenthesis(3));

function permute(arr, current, chosen, tried) {
    if(arr.length === 0) {
        if(isValid(current)) {
            let curStr = current.join('');

            if(!chosen.has(curStr)) chosen.add(curStr);
        }
    } else if(!tried.has(current.join(''))) {
        tried.add(current.join(''));
        
        for(let i = 0; i < arr.length; i++) {
            // choose
            let c = arr.splice(i, 1)[0];
            current.push(c);

            // explore
            permute(arr, current, chosen, tried);

            // unchoose
            arr.splice(i, 0, c);
            current.pop();   
        }
    }
}
        
function makeNParens(n) { return '()'.repeat(n).split(''); }

function isValid(arr) {
    let count = 0;
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === '(') count++;
        else count--;
        
        if(count < 0) return false;
    }
    
    return count === 0;
}