// 904. Fruit Into Baskets
// Medium

// 287

// 328

// Favorite

// Share
// In a row of trees, the i-th tree produces fruit with type tree[i].

// You start at any tree of your choice, then repeatedly perform the following steps:

// Add one piece of fruit from this tree to your baskets.  If you cannot, stop.
// Move to the next tree to the right of the current tree.  If there is no tree to the right, stop.
// Note that you do not have any choice after the initial choice of starting tree: you must perform step 1, then step 2, then back to step 1, then step 2, and so on until you stop.

// You have two baskets, and each basket can carry any quantity of fruit, but you want each basket to only carry one type of fruit each.

// What is the total amount of fruit you can collect with this procedure?

 

// Example 1:

// Input: [1,2,1]
// Output: 3
// Explanation: We can collect [1,2,1].
// Example 2:

// Input: [0,1,2,2]
// Output: 3
// Explanation: We can collect [1,2,2].
// If we started at the first tree, we would only collect [0, 1].
// Example 3:

// Input: [1,2,3,2,2]
// Output: 4
// Explanation: We can collect [2,3,2,2].
// If we started at the first tree, we would only collect [1, 2].
// Example 4:

// Input: [3,3,3,1,2,1,1,2,3,3,4]
// Output: 5
// Explanation: We can collect [1,2,1,1,2].
// If we started at the first tree or the eighth tree, we would only collect 4 fruits.
 

// Note:

// 1 <= tree.length <= 40000
// 0 <= tree[i] < tree.length

/**
 * @param {number[]} tree
 * @return {number}
 
 
   [3,3,3,1,2,1,1,2,3,3,4]
            i
          j


a = 3
b = 1
current = 4
max = 0


 */
var totalFruit = function(tree) {
    if(!tree.length || tree.length === 1) return tree.length;
    
    let a = -1,
        b = -1,
        i = 0,
        j = -1,
        current = 0,
        max = 0;
    
    while(i < tree.length) {
        if(a === -1 || a === tree[i]) {
            a = tree[i];
            current++;
            i++;
        } else if(b === -1 || b === tree[i]) {
            if(j === -1) j = i;
            b = tree[i];
            current++;
            i++;
        } else {
            if(current > max) max = current;
            i = j;
            j = -1;
            current = 0;
            a = -1;
            b = -1;
        }
    }
    
    if(current > max) max = current;
    
    return max;
};
