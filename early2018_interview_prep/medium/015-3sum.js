/*

Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note: The solution set must not contain duplicate triplets.

For example, given array S = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a, b) => {
       if(a < b) return -1;
       else if(a > b) return 1;
       else return 0; 
    });

    //debugger;

    const results = [];

    for(let i = 0; i < nums.length - 2; i++) {
        if(i === 0 || nums[i] !== nums[i-1]) {
            let sum = nums[i];
            let low = i + 1;
            let high = nums.length - 1;

            while(low < high) {
                if(low !== i && high !== i) {
                    sum = nums[i] + nums[low] + nums[high];

                    if(sum > 0) {
                        high--;
                    } else if(sum < 0) {
                        low++;
                    } else {
                        results.push([nums[i], nums[low], nums[high]]);
                        while(low < high && nums[low] === nums[low+1]) low++;
                        while(low < high && nums[high] === nums[high-1]) high--;
                        low++;
                        high--;
                    }
                } else {
                    if(i === low) low++;
                    if(i === high) high--;
                }
            }
        }        
    }

    return results;
};