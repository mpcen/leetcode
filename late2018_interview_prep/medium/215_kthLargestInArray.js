// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Example 1:

// Input: [3,2,1,5,6,4] and k = 2
// Output: 5
// Example 2:

// Input: [3,2,3,1,2,4,5,5,6] and k = 4
// Output: 4
// Note: 
// You may assume k is always valid, 1 ≤ k ≤ array's length.

// Solution 1: O(n*logn)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums = sort(nums);
    return nums[k-1]
};

function sort(nums) {
    return nums.sort((a,b) => {
        if(a < b) return 1;
        if(a > b) return -1;
        return 0;
    });
}

// Solution 2: O(n)