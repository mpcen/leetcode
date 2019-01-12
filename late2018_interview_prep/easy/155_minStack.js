// 155. Min Stack
// Easy

// 1397

// 152

// Favorite

// Share
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
// Example:
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.min = [];
    this.items = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.items.push(x);
    if(!this.min.length) this.min.push(x);
    else this.min.push(x < this.min[this.min.length - 1] ? x : this.min[this.min.length - 1]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.items.pop();
    this.min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.items[this.items.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
