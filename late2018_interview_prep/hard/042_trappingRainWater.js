// Given n non-negative integers representing an elevation map where the width of each bar is 1,
// compute how much water it is able to trap after raining.


// The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
// In this case, 6 units of rain water (blue section) are being trapped.

const trap = heights => {
    let maxSoFar = 0, waterTrapped = 0, maxSeenLeft = [];

    // loop from left to right
    for(let i = 0; i < heights.length; i++) {
        const currentBuildingHeight = heights[i];

        if(currentBuildingHeight > maxSoFar) {
            maxSoFar = currentBuildingHeight;
        }

        maxSeenLeft.push(maxSoFar);
    }

    maxSoFar = 0;

    // loop from right to left
    for(let i = heights.length - 1; i >= 0; i--) {
        const currentBuildingHeight = heights[i];
        waterTrapped += Math.max(Math.min(maxSoFar, maxSeenLeft[i]) - currentBuildingHeight, 0);

        if(currentBuildingHeight > maxSoFar) {
            maxSoFar = currentBuildingHeight;
        }
    }

    return waterTrapped;
};