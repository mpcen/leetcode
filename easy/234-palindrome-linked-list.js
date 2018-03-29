/*

Given a singly linked list, determine if it is a palindrome.

Follow up:
Could you do it in O(n) time and O(1) space?


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

var isPalindrome = function(head) {
    if(!head || !head.next) return true;
    
    let arr = []
    
    while(head) {
        arr.push(head.val);
        head = head.next;
    }
    
    let start = 0, end = arr.length - 1;
    
    while(start < end) {
        if(arr[start] !== arr[end]) return false;
        start++;
        end--;
    }
    
    return true;
};