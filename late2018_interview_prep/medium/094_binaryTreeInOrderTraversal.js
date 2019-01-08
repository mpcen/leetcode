// 94. Binary Tree Inorder Traversal
// Medium

// 1239

// 51

// Favorite

// Share
// Given a binary tree, return the inorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [1,3,2]
// Follow up: Recursive solution is trivial, could you do it iteratively?

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
*/

var inorderTraversal = function(root) {
    const order = [];
    
    dfs(root, order);
    
    return order;
};

function dfs(node, order) {
    if(!node) return [];
    
    if(node.left) dfs(node.left, order);
    order.push(node.val);
    if(node.right) dfs(node.right, order);
}


// Iterative solution:
