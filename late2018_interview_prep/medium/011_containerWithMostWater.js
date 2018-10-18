// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
//n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
//Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

// Example:

// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49

const maxArea = function(heights) {
    let p1 = 0,
        p2 = heights.length - 1,
        maxAreaSoFar = 0;

    while(p1 < p2) {
        const length = p2 - p1,
              height = Math.min(heights[p1], heights[p2]),
              currentArea = length * height;
        
        maxAreaSoFar = currentArea > maxAreaSoFar ? currentArea : maxAreaSoFar;
        heights[p1] <= heights[p2] ? p1++ : p2--;
    }

    return maxAreaSoFar;
};