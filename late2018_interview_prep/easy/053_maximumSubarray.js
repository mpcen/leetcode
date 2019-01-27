// Given an integer array nums, find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

/*
    Solution: Use 2 pointers to keep track of maximum so far and the max ending at the current index (maxEndingHere).
        If maxEndingHere falls below zero, reset the current max.

    https://www.youtube.com/watch?v=kekmCQXYwQ0
*/

const maxSubArray = nums => {
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];
    
    for(let i = 0; i < nums.length; i++) {
        if(i > 0) maxEndingHere = maxEndingHere + nums[i];        
        if(maxEndingHere > maxSoFar) maxSoFar = maxEndingHere;
        if(maxEndingHere < 0) maxEndingHere = 0;
    }

    return maxSoFar;
};

// Modification that returns subarray
var maxSubArray = function(nums) {
    let sumSoFar = 0,
        maxSum = Number.MIN_SAFE_INTEGER,
        start = 0,
        end = 0,
        j = 0;
    
    for(let i = 0; i < nums.length; i++) {
        sumSoFar += nums[i];
        
        if(sumSoFar >= maxSum) {
            maxSum = sumSoFar;
            start = j;
            end = i;
        }

        if(sumSoFar < 0) {
            sumSoFar = 0;
            j = i + 1;
        }
    }
    
    return nums.slice(start, end + 1);
};