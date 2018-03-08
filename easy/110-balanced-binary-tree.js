/*

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example 1:

Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7
Return true.

Example 2:

Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
Return false.

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
const isBalanced = root => {
	if(!root) {
		return true;
	}

	const cache = {
		min: Number.MAX_SAFE_INTEGER,
		max: Number.MIN_SAFE_INTEGER
	};

	checkHeight(root, cache, 0);

	return cache.max - cache.min <= 1;
}

const checkHeight = (node, cache, depth) => {
	if(!node) {
		if(depth < cache.min) {
			cache.min = depth;
		}

		if(depth > cache.max) {
			cache.max = depth;
		}
	} else {
		checkHeight(node.left, cache, depth + 1);
		checkHeight(node.right, cache, depth + 1);
	}
}