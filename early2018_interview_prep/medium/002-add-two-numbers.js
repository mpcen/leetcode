/*

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

*/

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
 // NEEDS TO TIDY UP. TWO WHILE LOOPS UNECESSARY
var addTwoNumbers = function(l1, l2) {
    let newLL = new ListNode(-1);
    let newLLTail = newLL;
    let carry = 0;
    let sum = 0;
    let nodeVal = 0;
    
    while(l1 && l2) {
        sum = l1.val + l2.val + carry;  
        
        if(sum >= 10) {
            nodeVal = sum - 10;
            carry = 1;
        } else {
            carry = 0;
            nodeVal = sum;
        }
        
        newLLTail.next = new ListNode(nodeVal);
        newLLTail = newLLTail.next;
        
        nodeVal = 0;
        
        l1 = l1.next;
        l2 = l2.next;        
    }
    
    if(l1 || l2) {
        let remainingLL = l1 !== null ? l1 : l2;
        
        while(remainingLL) {
            sum = remainingLL.val + carry;
            nodeVal = 0;
            
            if(sum >= 10) {
                nodeVal = sum - 10;
                carry = 1;
            } else {
                carry = 0;
                nodeVal = sum;
            }
            
            newLLTail.next = new ListNode(nodeVal);
            newLLTail = newLLTail.next;
            
            nodeVal = 0;
            
            remainingLL = remainingLL.next;
        }
    }
    
    if(carry > 0) {
        newLLTail.next = new ListNode(carry);
    }
    
    return newLL.next;
};