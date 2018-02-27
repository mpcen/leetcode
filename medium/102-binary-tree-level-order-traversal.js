/*

Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) {
        return [];
    }
    
    const queue = [root, 'end'];
    const results = [[root.val]];
    let currentLevel = [];
    
    while(queue.length > 1) {
        let node = queue.shift();
        
        if(node.left) {
            queue.push(node.left);
            currentLevel.push(node.left.val);
        }
        
        if(node.right) {
            queue.push(node.right);
            currentLevel.push(node.right.val);
        }
        
        if(queue[0] === 'end' && queue.length > 1) {
            results.push(currentLevel);
            currentLevel = [];
            node = queue.shift();
            queue.push(node);
        }
    }
    
    return results;
};