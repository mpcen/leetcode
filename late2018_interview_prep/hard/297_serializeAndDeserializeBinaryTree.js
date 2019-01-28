// 297. Serialize and Deserialize Binary Tree
// Hard

// 1130

// 55

// Favorite

// Share
// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

// Example: 

// You may serialize the following tree:

//     1
//    / \
//   2   3
//      / \
//     4   5

// as "[1,2,3,null,null,4,5]"
// Clarification: The above format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

// Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(!root) return null;
    const queue = [root], items = [];
    
    while(queue.length) {
        const node = queue.shift();
        
        if(node) {
            items.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else items.push(null);
    }
    
    return items.toString();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(!data) return null;
    
    const dataArr = data.split(','),
          root = new TreeNode(parseInt(dataArr.shift())),
          queue = [];
    let current = root;
    
    while(dataArr.length) {
        const left = dataArr.shift();
        if(left) {
            const newNode = new TreeNode(parseInt(left));
            current.left = newNode;
            queue.push(newNode);
        } else current.left = null;
        
        const right = dataArr.shift();
        if(right) {
            const newNode = new TreeNode(parseInt(right));
            current.right = newNode;
            queue.push(newNode);
        } else current.right = null;
        
        current = queue.shift();
    }
    
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */