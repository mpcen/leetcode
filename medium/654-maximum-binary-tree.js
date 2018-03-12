/*

Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

The root is the maximum number in the array.
The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
Construct the maximum tree by the given array and output the root node of this tree.

Example 1:
Input: [3,2,1,6,0,5]
Output: return the tree root node representing the following tree:

      6
    /   \
   3     5
    \    / 
     2  0   
       \
        1
Note:
The size of the given array will be in the range [1,1000].

*/

const getMaxIndex = arr => {
    let index = -1;
    let max = Number.MIN_SAFE_INTEGER;
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            index = i;
            max = arr[i];
        }
    }
    
    return index;
}

const sortDesc = arr => {
    return arr.sort((a, b) => {
        if(a < b) return 1;
        else if(a > b) return -1;
        else return 0;
    });
}

var constructMaximumBinaryTree = function(nums) {
    let maxIndex = getMaxIndex(nums);
    let left = [];
    let right = [];
    
    if(maxIndex !== 0) {
        left = nums.slice(0, maxIndex);
    }
    
    if(maxIndex !== nums.length -1) {
        right = nums.slice(maxIndex+1, nums.length);
    }
    
    let root = new TreeNode(nums.splice(maxIndex, 1)[0]);
    
    root.left = constructTree(sortDesc(left), 'right');
    root.right = constructTree(sortDesc(right), 'left');
    
    return root;
};

const constructTree = (arr, direction) => {
    if(!arr.length) return null;
    
    let root = new TreeNode(arr.shift());
    let curNode = root;
    
    while(arr.length) {
        curNode[direction] = new TreeNode(arr.shift());
        curNode = curNode[direction];
    }
    
    return root;
}
