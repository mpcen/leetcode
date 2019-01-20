// 253. Meeting Rooms II
// Medium

// 996

// 20

// Favorite

// Share
// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

// Example 1:

// Input: [[0, 30],[5, 10],[15, 20]]
// Output: 2
// Example 2:

// Input: [[7,10],[2,4]]
// Output: 1

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 
 */
var minMeetingRooms = function(intervals) {
    if(!intervals.length) return 0;
    if(intervals.length === 1) return 1;
    
    intervals = sort(intervals);
    const pQueue = new PriorityQueue();
    
    pQueue.enqueue(intervals[0].end);
    
    for(let i = 1; i < intervals.length; i++) {
        if(intervals[i].start >= pQueue.peek()) {
            pQueue.dequeue();
        }
        
        pQueue.enqueue(intervals[i].end);
    }
    
    return pQueue.size();
};

function sort(intervals) {
    return intervals.sort((a, b) => {
        if(a.start < b.start) return -1;
        else if(a.start > b.start) return 1;
        return 0;
    });
}

class PriorityQueue {
    constructor() {
        this.items = [];
    }
    
    enqueue(endTime) {
        for(let i = 0; i < this.items.length; i++) {
            if(endTime < this.items[i]) {
                this.items.splice(i, 0, endTime);
                return;
            }
        }
        
        this.items.push(endTime);
    }
    
    dequeue() {
        return this.items.shift();
    }
    
    peek() {
        return this.items[0];
    }
    
    size() {
        return this.items.length;
    }
}