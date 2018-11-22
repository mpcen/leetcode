// 226. Invert Binary Tree
// Easy
// 1245
// 22


// Invert a binary tree.

// Example:

// Input:

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1
// Trivia:
// This problem was inspired by this original tweet by Max Howell:

// Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    traverseDF(root);
    return root;
};

function traverseDF(node) {
    if(node) {
        const tmp = node.left;
        node.left = node.right;
        node.right = tmp;
        
        if(node.left) traverseDF(node.left);
        if(node.right) traverseDF(node.right);
    }
}