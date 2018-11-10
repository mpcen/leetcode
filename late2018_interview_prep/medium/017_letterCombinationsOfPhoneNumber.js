// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

function letterCombinations(digits) {
    if(digits === '') return [];
    const chosen = [];
    let letters = digits.split('').map(digit => map.get(digit).split(''));
    helper(letters, [], chosen);
    return chosen;
}

function helper(letters, current, chosen) {
    if(!letters.length) {
        chosen.push([...current].join(''));
    } else {
        let letterGroup = letters.shift();

        for(let i = 0; i < letterGroup.length; i++) {
            // choose
            let letter = letterGroup.splice(i, 1)[0];
            current.push(letter);

            // explore
            helper(letters, current, chosen);

            // unchoose
            current.pop();
            letterGroup.splice(i, 0, letter);
        }

        letters.unshift(letterGroup);
    }
}

const map = new Map();
map.set('2', 'abc');
map.set('3', 'def');
map.set('4', 'ghi');
map.set('5', 'jkl');
map.set('6', 'mno');
map.set('7', 'pqrs');
map.set('8', 'tuv');
map.set('9', 'wxyz');
