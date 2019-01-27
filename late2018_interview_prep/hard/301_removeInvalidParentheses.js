/**
 * @param {string} s
 * @return {string[]}
 
 
 
                                            "()())()"
                          "" * ")())()"                         "(" * ")())()"
                "" * "())()"       ")" * "())()"        "(" * "())()"       "()" * "())()"
        "" * ")()"   "(" * "))()"  ")" * "))()" ")(" * "))()"
                
                            
 
 
 
 */
var removeInvalidParentheses = function(s) {
    const output = new Set();
    const validationMap = new Map();
    
    helper(s, '', output, validationMap);
    
    let setArr = [...output];
    let max = setArr[setArr.length - 1].length;
    return setArr.filter(item => item.length === max);
};

function helper(s, chosen, output, validationMap) {
    if(!s.length) {
        if(isValid(chosen, validationMap)) output.add(chosen);
    } else {
        // choose char
        const char = s.charAt(0);
        s = s.substring(1);
        
        // explore without char
        helper(s, chosen, output, validationMap);
        
        // explore with char
        chosen += char;
        helper(s, chosen, output, validationMap);
        
        // unchoose char
        chosen = chosen.substring(0, chosen.length - 1);
        s = char + s;
    }
}

function isValid(s, validationMap) {
    if(validationMap.has(s)) return validationMap.get(s);
    
    let count = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s.charAt(i) === '(') {
            count++
        } else if(s.charAt(i) === ')') {
            count--;
            if(count < 0) return false;
        }
    }
    
    validationMap.set(s, count === 0);
    
    return count === 0;
}