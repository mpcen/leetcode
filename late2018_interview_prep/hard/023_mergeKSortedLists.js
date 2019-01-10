// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

// Example:

// Input:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// Output: 1->1->2->3->4->4->5->6

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// O(N*logN)
var mergeKLists = function(lists) {
    if(!lists.length) return null;
    if(lists.length === 1) return lists[0];
    
    
    let arr = [];
    let newList = new ListNode(null);
    let pNew = newList;
    
    for(let i = 0; i < lists.length; i++) {
        let p = lists[i];
        
        while(p) {
            arr.push(p.val);
            p = p.next;
        }
    }
    
    arr = sort(arr);
    
    for(let i = 0; i < arr.length; i++) {
        pNew.next = new ListNode(arr[i]);
        pNew = pNew.next;
    }
    
    return newList.next;
};

function sort(arr) {
    return arr.sort((a,b) => {
        if(a < b) return -1;
        if(a > b) return 1;
        return 0;
    });
}

// Solution w/ Priority Queue
var mergeKLists = function(lists) {
    const q = new PriorityQueue();
    const newListHead = new ListNode(-1);
    let current = newListHead, empty = false;
    
    for(let list of lists) {
        while(list) {
            q.enqueue(list.val);
            list = list.next;
        }
    }
    
    empty = q.isEmpty();
    
    while(!empty) {
        const newListNode = new ListNode(q.dequeue());
        current.next = newListNode;
        current = current.next;
        empty = q.isEmpty();
    }
    
    return newListHead.next;
};

class PriorityQueue {
    constructor() {
        this.items = [];
    }
    
    enqueue(val) {
        if(!this.items.length) this.items.push(val);
        else {
            let added = false;
            for(let i = 0; i < this.items.length; i++) {
                if(val > this.items[i]) {
                    this.items.splice(i, 0, val);
                    added = true;
                    break;
                }
            }
            
            if(!added) this.items.push(val);
        }
    }
    
    dequeue() {
        return this.items.pop();
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
}