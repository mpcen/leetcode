// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// You may assume nums1 and nums2 cannot be both empty.

// Example 1:

// nums1 = [1, 3]
// nums2 = [2]

// The median is 2.0
// Example 2:

// nums1 = [1, 2]
// nums2 = [3, 4]

// The median is (2 + 3)/2 = 2.5

const findMedianSortedArrays = (nums1, nums2) => {
    const
        totalLength = nums1.length + nums2.length,
        midIndex = Math.floor((totalLength) / 2);
    let
        i1 = 0,
        i2 = 0,
        current = null,
        last = null;

    while((i1 + i2) <= midIndex) {
        if(current) {
            last = current;
        }

        if(nums1[i1] === undefined || nums2[i2] === undefined) {
            current = nums1[i1] ? nums1[i1++] : nums2[i2++];
        } else if(nums1[i1] <= nums2[i2]) {
            current = nums1[i1++];
        } else {
            current = nums2[i2++];
        }
    }

    if(totalLength % 2 === 0) {
        return (current + last) / 2;
    } else {
        return current;
    }
}