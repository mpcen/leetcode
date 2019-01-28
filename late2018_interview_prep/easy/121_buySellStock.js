// 121. Best Time to Buy and Sell Stock
// Easy

// 1955

// 100

// Favorite

// Share
// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minSoFar = prices[0];
    let minPricesOnDay = [minSoFar];
    let profit = 0;
    
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] < minSoFar)minSoFar = prices[i];
        minPricesOnDay[i] = minSoFar;
    }

    for(let i = 0; i < prices.length; i++) {
        let curr = prices[i] - minPricesOnDay[i];
        if(curr > profit) profit = curr;
    }

    return profit;
};

// Using Kadane's Algorithm
/**
 * 
     prices[i] - prices[j]
 
    0  1  2  3   4  5   6
   [7, 4, 5, 1, 14, 11, 98]
                        i
             j
  
  currentProfit: 97
  maxSoFar: 13
  
 */
var maxProfit = function(prices) {
    let maxSoFar = 0,
        currentProfit = 0,
        j = 0;
    
    for(let i = 1; i < prices.length; i++) {
        currentProfit = prices[i] - prices[j];
        
        if(currentProfit > maxSoFar) {
            maxSoFar = currentProfit;
        } else if(currentProfit < 0) {
            j = i;
        }
    }
    
    return maxSoFar;
};