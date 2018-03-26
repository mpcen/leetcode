/*

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
Note:
Bonus points if you could solve it both recursively and iteratively.

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
 * @return {boolean}
 */

// RECURSIVE




// ITERATIVE
var isSymmetric = function(root) {
    if(!root || (!root.left && !root.right)) return true;

    const queue = [root, root];

    while(queue.length) {
        let c1 = queue.shift();
        let c2 = queue.shift();

        if(!c1 && !c2) continue;
        if(!c1 || !c2) return false;
        if(c1.val !== c2.val) return false;

        queue.push(c1.left, c2.right, c1.right, c2.left);
    }

    return true;
};