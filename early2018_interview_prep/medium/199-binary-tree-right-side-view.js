/*

Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

For example:
Given the following binary tree,
   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
You should return [1, 3, 4].

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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root) {
    	return [];
    }

    const queue = [root, 'end'];
	const results = [];

    while(queue.length > 1) {
    	let node = queue.shift();

    	if(node.left) {
    		queue.push(node.left);
    	}

    	if(node.right) {
    		queue.push(node.right);
    	}

    	if(queue[0] === 'end') {
    		results.push(node.val);
    		queue.shift();
    		queue.push(node);
    	}
    }

    return results;
};