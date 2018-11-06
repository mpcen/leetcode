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