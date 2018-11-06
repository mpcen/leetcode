// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(!l1 && !l2) return null;
    if(!l1) return l2;
    if(!l2) return l1;
    
    let mergedList = new ListNode(null);
    let p1 = l1, p2 = l2, pNew = mergedList;
    
    while(p1 && p2) {
        if(p1.val <= p2.val) {
            pNew.next = new ListNode(p1.val);
            p1 = p1.next;
        } else {
            pNew.next = new ListNode(p2.val);
            p2 = p2.next;
        }
        
        pNew = pNew.next;
    }
    
    if(p1 || p2) {
        p1 = p1 ? p1 : p2;
        pNew.next = p1;
    }
    
    return mergedList.next;
};