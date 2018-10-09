/*

Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

Example:

Input: The root of a Binary Search Tree like this:
              5
            /   \
           2     13

Output: The root of a Greater Tree like this:
             18
            /   \
          20     13

*/

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
const traverseTree = (root, cb) => {
    if(root.right) traverseTree(root.right, cb);     
    cb(root);
    if(root.left) traverseTree(root.left, cb);
}

var convertBST = function(root) {
    if(!root) return root;
    let sum = 0;

    traverseTree(root, node => {
        node.val += sum;
        sum = node.val;
    });
    
    return root;
};