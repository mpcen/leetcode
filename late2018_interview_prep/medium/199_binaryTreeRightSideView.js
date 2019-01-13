// 199. Binary Tree Right Side View
// Medium

// 785

// 28

// Favorite

// Share
// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example:

// Input: [1,2,3,null,5,null,4]
// Output: [1, 3, 4]
// Explanation:

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 
 
 
        1              <---
     /   \
    2      3          <---
     \    / \
      5  8   4        <---
          \
          10

 queue: #
 item:  10
 vals:  1 3 4 10
 
*/

var rightSideView = function(root) {
    if(!root) return [];
    
    const queue = [root, '#'];
    const vals = [];
    
    while(queue.length > 1) {
        const item = queue.shift();
        
        if(item.left) queue.push(item.left);        
        if(item.right) queue.push(item.right);
        
        if(queue[0] === '#') {
            vals.push(item.val);
            queue.push('#');
            queue.shift();
        }
    }
    
    return vals;
};