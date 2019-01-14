// 102. Binary Tree Level Order Traversal
// Medium

// 1113

// 28

// Favorite

// Share
// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    const queue = [root, '#'], levelOrder = []
    let level = [];
    
    while(queue.length > 1) {
        const item = queue.shift();
        
        if(item === '#') {
            levelOrder.push([...level]);
            level = [];
            queue.push('#');
        } else {
            level.push(item.val);
            
            if(item.left) queue.push(item.left);
            if(item.right) queue.push(item.right);
        }
    }
    
    if(level.length) levelOrder.push(level);
    
    return levelOrder;
};