/*

Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.

click to show more practice.

More practice:
If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(!nums.length) { return 0 }
    let max_so_far = nums[0];
    let max_ending_here = 0;
    
    for(let i = 0; i < nums.length; i++) {
        max_ending_here += nums[i];
        
        if(max_so_far < max_ending_here) {
            max_so_far = max_ending_here;
        }
        
        if(max_ending_here < 0) {
            max_ending_here = 0;
        }
    }
    
    return max_so_far;
};