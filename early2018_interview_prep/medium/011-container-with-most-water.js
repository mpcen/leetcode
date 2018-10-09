/*

Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if(!height.length) { return 0 };
    
    let maxArea = Number.MIN_SAFE_INTEGER,
        p1 = 0,
        p2 = height.length - 1;
    
    while(p1 < p2) {
        let minHeight = height[p1] < height[p2] ? height[p1] : height[p2],
            area = minHeight * (p2 - p1);
        
        if(area > maxArea)
            maxArea = area;
        
        if(height[p1] < height[p2]) {
            p1++;
        } else {
            p2--;
        }
    }
    
    return maxArea;
};