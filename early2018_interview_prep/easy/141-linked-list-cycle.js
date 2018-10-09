/*

Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?

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
 * @return {boolean}
 */
var hasCycle = function(head) {
	debugger;
    if(!head || !head.next) {
        return false;
    }
    
    let fast = head.next;
    let slow = head;
    
    while(fast) {
        if(fast === slow) {
            return true;
        }
        
        if(fast.next) {
            slow = slow.next;
            fast = fast.next;
            
            if(fast.next) {
                fast = fast.next;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
};