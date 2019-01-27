// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
//Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/*
Solution: Sort the array, loop from 0 -> n - 2 (outer portion of array), use 2 pointers to close in.
          Make sure to skip over dup numbers of list to prevent dups.
*/

const sort = function(nums) {
    return nums.sort(function(a,b) {
        if(a < b) return -1;
        else if(a > b) return 1;
        return 0;
    });
}

const threeSum = function(nums) {
    const res = [];
    let p1, p2;
    let sortedNums = sort(nums);

    for(let i = 0; i < sortedNums.length - 2; i++) {
        if(i === 0 || sortedNums[i] !== sortedNums[i - 1]) {
            p1 = i+1;
            p2 = sortedNums.length - 1;

            while(p1 < p2) {
                const sum = sortedNums[i] + sortedNums[p1] + sortedNums[p2];

                if(sum === 0) {
                    const vals = [sortedNums[i], sortedNums[p1], sortedNums[p2]];

                    res.push(vals);

                    while(p1 < p2 && nums[p1] === nums[p1 + 1]) p1++;
                    while(p1 < p2 && nums[p2] === nums[p2 - 1]) p2--;
                    p1++;
                    p2--;
                } else if(sum < 0) p1++;
                else p2--;
            }
        }
    }

    return res;
}

var CLEANER_BUT_SLOWER_threeSum = function(nums) {
    const sumSet = new Map();
    let sum = 0;
    
    nums = sort(nums);
    
    for(let i = 0; i < nums.length - 2; i++) {
        let p1 = i+1, p2 = nums.length - 1;
        
        while(p1 < p2) {
            sum = nums[i] + nums[p1] + nums[p2];
            
            if(sum < 0) p1++;
            else if(sum > 0) p2--;
            else {
                sumSet.set([nums[i], nums[p1], nums[p2]].toString(), [nums[i], nums[p1], nums[p2]]);
                p1++;
                p2--;
            }
        }
    }
    
    return [...sumSet.values()]
};
