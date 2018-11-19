// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.

// Note:
// 0 ≤ x, y < 231.

// Example:

// Input: x = 1, y = 4

// Output: 2

// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑

// The above arrows point to positions where the corresponding bits are different.

var hammingDistance = function(x, y) {
    let xBin = x.toString(2);
    let yBin = y.toString(2);
    let targetSize = xBin.length >= yBin.length ? xBin.length : yBin.length;
    let distance = 0;
    
    if(xBin.length !== targetSize) {
        xBin = xBin.padStart(targetSize, '0')
    } else {
        yBin = yBin.padStart(targetSize, '0');
    }
    
    for(let i = 0; i < targetSize; i++) {
        if(xBin.charAt(i) !== yBin.charAt(i)) distance++;
    }
    
    return distance;
};