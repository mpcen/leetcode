// 138. Copy List with Random Pointer
// Medium

// 1139

// 347

// Favorite

// Share
// A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

// Return a deep copy of the list.

/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    if(!head) return null;
    let map = new Map();
    let currentNode = head;
    
    // Copy Nodes into Map
    while(currentNode) {
        map.set(currentNode, new RandomListNode(currentNode.label));
        currentNode = currentNode.next;
    }
    
    currentNode = head;
    
    // assign .next and .random pointers
    while(currentNode) {
        map.get(currentNode).next = map.get(currentNode.next);
        map.get(currentNode).random = map.get(currentNode.random);
        currentNode = currentNode.next;
    }
    
    return map.get(head);
};