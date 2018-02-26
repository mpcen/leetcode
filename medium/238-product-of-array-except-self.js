/*

Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Solve it without division and in O(n).

For example, given [1,2,3,4], return [24,12,8,6].

Follow up:
Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
	let p = [];
	let product = 1;

	for(let i = 0; i < nums.length; i++) {
		p[i] = product;
		product *= nums[i];
	}

	product = 1;

	for(let j = nums.length - 1; j >= 0; j--) {
		p[j] *= product;
		product *= nums[j];
	}

	return p;
}