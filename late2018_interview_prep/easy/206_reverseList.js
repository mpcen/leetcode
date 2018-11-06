// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

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

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

const ll = new ListNode(1)
ll.next = new ListNode(2)
ll.next.next = new ListNode(3)
ll.next.next.next = new ListNode(4)
ll.next.next.next.next = new ListNode(5)

// iterative
var reverseListIterative = function(head) {
    if(!head || !head.next) return head;
    
    let p1 = head, p2 = head.next, lastNode = head, tmp;
    
    while(p2) {
        tmp = p2.next;
        p2.next = p1;
        p1 = p2;
        p2 = tmp;
    }
    
    lastNode.next = null;
    return p1;
};

console.log(reverseListIterative(ll));