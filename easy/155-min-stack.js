/*

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
Example:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.

*/

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.topOfStack = -1;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if(!this.stack.length) {
        this.stack.splice(++this.topOfStack, 0, {n: x, min: x});
    } else {
        let currentMin = this.stack[this.topOfStack].min;
        
        this.stack.splice(++this.topOfStack, 0, {n: x, min: x < currentMin ? x : currentMin})
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.topOfStack >= 0) {
        this.stack.splice(this.topOfStack--, 1)[0];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.topOfStack].n;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.topOfStack].min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */