/*

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

For example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.

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
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) {
		return 0;
	}
	
    const arr = [root, 'X'];
	let counter = 1;

	while(arr.length > 1) {
		let node = arr.shift();

		if(node === 'X') {
			counter++;
			arr.push('X');
		} else {
			if(node.left) {
				arr.push(node.left);
			}

			if(node.right) {
				arr.push(node.right);
			}
		}
	}

	return counter;
};