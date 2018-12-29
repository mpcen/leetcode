// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Example 1:

// Input: [3,2,1,5,6,4] and k = 2
// Output: 5
// Example 2:

// Input: [3,2,3,1,2,4,5,5,6] and k = 4
// Output: 4
// Note: 
// You may assume k is always valid, 1 ≤ k ≤ array's length.

// Solution 1: O(n*logn)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest_Onlogn = function(nums, k) {
    nums = sort(nums);
    return nums[k-1]
};

function sort(nums) {
    return nums.sort((a,b) => {
        if(a < b) return 1;
        if(a > b) return -1;
        return 0;
    });
}

// Solution 2: O(n)
var findKthLargest_On = function(nums, k) {
    let minHeap = new MinHeap(k);
    
    for(let i = 0; i < nums.length; i++) {
        minHeap.add(nums[i]);
        if(minHeap.size > k) minHeap.poll();
    }
    
    return minHeap.poll();
};

class MinHeap {
    constructor(maxSize) {
        this.items = [];
        this.size = 0;
        this.maxSize = maxSize;
    }
    
    getLeftChildIndex(index) { return 2*index+1; }
    getRightChildIndex(index) { return 2*index+2; }
    getParentIndex(index) { return Math.ceil((index - 2)/2); }
    hasLeftChild(index) { return this.getLeftChildIndex(index) < this.size; }
    hasRightChild(index) { return this.getRightChildIndex(index) < this.size; }
    hasParent(index) { return this.getParentIndex(index) >= 0; }
    leftChild(index) { return this.items[this.getLeftChildIndex(index)]; }
    rightChild(index) { return this.items[this.getRightChildIndex(index)]; }
    parent(index) { return this.items[this.getParentIndex(index)]; }
    
    add(item) {
        this.items.push(item);
        this.size++;
        this.heapifyUp();
    }
    
    poll() {
        let item = this.items[0];
        this.items[0] = this.items.pop();
        this.size--;
        this.heapifyDown();
        return item;
    }
    
    heapifyUp() {
        let index = this.size - 1;
        
        while(this.hasParent(index) && this.items[index] < this.parent(index)) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }
    
    heapifyDown() {
        let index = 0;
        
        while(this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            
            if(this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            
            if(this.items[index] < this.items[smallerChildIndex]) {
                break;
            } else {
                this.swap(smallerChildIndex, index);
                index = smallerChildIndex;
            }
        }
    }
    
    swap(a, b) {
        let tmp = this.items[a];
        this.items[a] = this.items[b];
        this.items[b] = tmp;
    }
}