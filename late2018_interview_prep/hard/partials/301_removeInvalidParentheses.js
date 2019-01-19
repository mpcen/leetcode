// 301. Remove Invalid Parentheses
// Hard

// 1027

// 46

// Favorite

// Share
// Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

// Note: The input string may contain letters other than the parentheses ( and ).

// Example 1:

// Input: "()())()"
// Output: ["()()()", "(())()"]
// Example 2:

// Input: "(a)())()"
// Output: ["(a)()()", "(a())()"]
// Example 3:

// Input: ")("
// Output: [""]

function removeInvalidParentheses(s) {
    const set = new Set();
    let chosen = [];
    
    dfs(s.split(''), chosen, set, 0, 0);
    
    if(set.size > 0) {
        let arr = [...set], final = [];
        let max = arr[arr.length - 1].length;

        for(let i = arr.length - 1; i >= 0; i--) {
            if(arr[i].length >= max) {
                final.push(arr[i]);
            }
        }

        return final;   
    }

    return ['']
}

function dfs(s, chosen, set, l, r) {
    if(!s.length) {
        const str = chosen.join('');
        if(validate(str) && !set.has(str) && str.length) {
            set.add(str);
        }
    } else {
        for(let i = 0; i < s.length; i++) {
            // choose
            const c = s.shift();

            // explore without
            dfs(s, chosen, set, l, r);

            // explore with
            chosen.push(c);
            dfs(s, chosen, set, l, r);

            // unchoose
            chosen.pop();
            s.unshift(c);
        }
    }
}

function validate(s) {
    let count = 0;

    for(let i = 0; i < s.length; i++) {
        if(s.charAt(i) === '(') count++;
        else if(s.charAt(i) === ')') {
            count--;
            if(count < 0) return false;
        }
    }

    return count === 0;
}