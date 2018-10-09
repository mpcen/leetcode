// You are given two non-empty linked lists representing two non-negative integers.
//The digits are stored in reverse order and each of their nodes contain a single digit.
//Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const addTwoNumbers = (l1, l2) => {
    const sumList = new ListNode(-1);
    let sumListTail = sumList;
    let p1 = l1, p2 = l2, carry = 0

    while(p1 && p2) {
        let sum = p1.val + p2.val + carry;
        carry = 0;

        if(sum >= 10) {
            sum = sum - 10;
            carry = 1;
        }

        sumListTail.next = new ListNode(sum);
        sumListTail = sumListTail.next;
        p1 = p1.next;
        p2 = p2.next;
    }

    let remains = p1 ? p1 : p2;

    while(remains) {
        let sum = remains.val + carry;
        carry = 0;

        if(sum >= 10) {
            sum = sum - 10;
            carry = 1;
        }

        sumListTail.next = new ListNode(sum);
        sumListTail = sumListTail.next;
        remains = remains.next;
    }

    if(carry > 0) {
        sumListTail.next = new ListNode(carry);
    }

    return sumList.next;
}

const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

console.log(addTwoNumbers(l1, l2));