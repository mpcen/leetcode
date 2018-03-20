/*

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

    let res = [];
    let mid = null;
    
    while(nums1.length && nums2.length) {
        if(nums1[0] < nums2[0]) {
            res.push(nums1.shift())
        } else {
            res.push(nums2.shift());
        }
    }
    
    if(nums1.length) {
        res.push(...nums1);
    } else if(nums2.length) {
        res.push(...nums2);
    }
    
    mid = res.length / 2;
    
    if(res.length % 2 === 0) { // even size
        return (res[mid] + res[mid-1]) / 2;
    } else { // odd size
        mid = Math.floor(mid);
        return res[Math.floor(mid)];
    }
};