// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0;
    const cache = { maxDepth: Number.MIN_SAFE_INTEGER }
    dfs(root, 1, cache);
    return cache.maxDepth;
};

function dfs(node, currentDepth, cache) {
    if(node) {
        if(currentDepth > cache.maxDepth) cache.maxDepth = currentDepth;

        if(node.left) dfs(node.left, currentDepth + 1, cache);
        if(node.right) dfs(node.right, currentDepth + 1, cache);
    }
}