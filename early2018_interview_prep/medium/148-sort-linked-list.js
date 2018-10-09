/*

Sort a linked list in O(n log n) time using constant space complexity.

ex: 7 -> 6 - > 4 -> 1 -> null  
should be:
1 -> 4 -> 6 -> 7 -> null

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
var sortList = function(head) {
    if(!head || !head.next) {
        return head;
    }

    let fast = head;
    let slow = head;
    let prev = null;

    while(fast && fast.next) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }

    prev.next = null;

    return merge(sortList(head), sortList(slow));
};

const merge = (l1, l2) => {
    const newListHead = new ListNode(null);
    let currentNode = newListHead;

    while(l1 && l2) {
        if(l1.val < l2.val) {
            currentNode.next = l1;
            l1 = l1.next;
        } else {
            currentNode.next = l2;
            l2 = l2.next;
        }

        currentNode = currentNode.next;
    }

    if(l1) {
        currentNode.next = l1;
    } else if(l2) {
        currentNode.next = l2;
    }

    return newListHead.next;
}