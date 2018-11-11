// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1


var search = function(nums, target) {
    if(!nums.length) return -1;
    
    let l = 0, r = nums.length - 1;
    
    while(l <= r) {
        let mid = Math.floor((l + r) / 2);
        
        if(nums[mid] === target) return mid;
        if(nums[l] === target) return l;
        if(nums[r] === target) return r;
        
        // check left half range
        if(nums[mid] >= nums[l]) {
            if(nums[l] <= target && target <= nums[mid-1]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            if(nums[mid] < target && target <= nums[r]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    
    return -1;
};