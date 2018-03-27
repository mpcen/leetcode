/*

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Credits:
Special thanks to @ifanchu for adding this problem and creating all test cases. Also thanks to @ts for adding additional test cases.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(!nums.length) return 0;
    if(nums.length === 1) return nums[0];
    
    let prevMax = 0;
    let curMax = 0;
    
    for(let i = 0; i < nums.length; i++) {
        let tmp = curMax;
        
        curMax = Math.max(prevMax + nums[i], curMax);
        
        prevMax = tmp;
    }
    
    return curMax;
};