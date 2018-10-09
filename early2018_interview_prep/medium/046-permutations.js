/*

Given a collection of distinct numbers, return all possible permutations.

For example,
[1,2,3] have the following permutations:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(!nums.length) {
        return nums;
    }
    
    const set = [];
    const p = [];
    
    permuteHelper(nums, p, set);
    
    return set;
};

const permuteHelper = (nums, p, set) => {
    if(!nums.length) {
        set.push([...p]);
    } else {
        for(let i = 0; i < nums.length; i++) {
            let n = nums.splice(i, 1)[0];
            p.push(n);
            
            permuteHelper(nums, p, set);
            
            nums.splice(i, 0, n);
            p.pop();
        }
    }
}