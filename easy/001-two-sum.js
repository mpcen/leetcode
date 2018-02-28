/*

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const ht = {};
    
    for(let i = 0; i < nums.length; i++) {
    	if(!ht.hasOwnProperty(nums[i])) {
    		ht[nums[i]] = [i];	
    	} else {
    		ht[nums[i]].push(i);
    	}
    }

    for(n in ht) {
    	for(let i = 0; i < ht[n].length; i++) {
    		let diff = target - n;
        
			if(ht.hasOwnProperty(diff)) {
				if(ht[diff].length > 1) {
					return [ht[n][i], ht[diff][i+1]]
				} else {
					return [ht[n][i], ht[diff][i]];
				}			
			}
    	}        
    }
};