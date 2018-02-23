/*

Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

For example,
MovingAverage m = new MovingAverage(3);
m.next(1) = 1
m.next(10) = (1 + 10) / 2
m.next(3) = (1 + 10 + 3) / 3
m.next(5) = (10 + 3 + 5) / 3

*/

/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.queue = [];
    this.size = size;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    let denominator = 1;
    
    this.queue.push(val);
    
    if(this.queue.length > this.size) {
        this.queue.shift();
    }
    
    denominator = this.queue.length === this.size ? this.size : this.queue.length;
    
    return sumQueue(this.queue) / denominator;
};

const sumQueue = queue => {
    return queue.reduce((acc,next) => {
        return acc + next;
    }, 0)
}

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = Object.create(MovingAverage).createNew(size)
 * var param_1 = obj.next(val)
 */