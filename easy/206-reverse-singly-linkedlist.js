/*

Reverse a singly linked list.

click to show more hints.

Hint:
A linked list can be reversed either iteratively or recursively. Could you implement both?

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head) {
        return null;
    }
    
    if(!head.next) {
        return head;
    }
    
    
    let aux = null;
    let currentNode = head;
    
    while(currentNode) {
        let nextNode = currentNode.next;
        currentNode.next = aux;
        aux = currentNode;
        currentNode = nextNode;
    }
    
    return aux;
};