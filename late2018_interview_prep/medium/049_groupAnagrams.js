// 49. Group Anagrams
// Medium
// 1154
// 78


// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(!strs.length) return [];
    if(strs.length === 1) return [strs];
    
    let map = new Map();
    const retArr = [];
    
    for(let str of strs) {
        const sortedStr = sortStr(str);
        
        if(!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        
        map.set(sortedStr, [...map.get(sortedStr), str]);
    }
    
    map.forEach(m => retArr.push([...m]));

    return retArr;
};

function sortStr(str) {
    return str.split('').sort((a, b) => {
        if(a < b) return -1;
        if(a > b) return 1;
        return 0;
    }).join('');
}