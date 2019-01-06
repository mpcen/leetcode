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
    if(!l1) return l2;
    if(!l2) return l1;
    
    let newLLHead = new ListNode(null);
    let newLLPointer = newLLHead;
    
    while(l1 && l2) {
        if(l1.val <= l2.val) {
            newLLPointer.next = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            newLLPointer.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        
        newLLPointer = newLLPointer.next;
    }
    
    if(l1 || l2) {
        newLLPointer.next = l1 ? l1 : l2;
    }
    
    return newLLHead.next;
};