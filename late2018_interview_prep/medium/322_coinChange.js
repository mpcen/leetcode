// 322. Coin Change
// Medium

// 1189

// 61

// Favorite

// Share
// You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// Example 1:

// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const used = new Array(amount + 1);
    const INF = Number.MAX_SAFE_INTEGER;
    used[0] = 0;
    
    for(let i = 1; i <= amount; i++) {
        let tmp = INF;
        used[i] = INF;
        
        for(let j = 0; j < coins.length; j++) {
            if(i >= coins[j]) tmp = used[i - coins[j]];
            if(tmp !== INF) used[i] = Math.min(used[i], tmp + 1);
        }
    }
    
    return used[amount] !== INF ? used[amount] : -1;
};