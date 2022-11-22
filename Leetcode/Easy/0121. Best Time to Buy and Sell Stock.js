/*
121. Best Time to Buy and Sell Stock
Easy
21.5K
684
Companies
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

Constraints:
1 <= prices.length <= 105
0 <= prices[i] <= 104
*/

/*
Given an array of non-negative numbers.
Return the maximum profit possible.
Create a variable to store maximum possible.
Create a variable to store buy price.
Create a variable to store buy price index.
Create a variable to store sell price.
Iterate through array.
If price is ever 0, that is a buy.
At each iteration check if current price is lower than buy. If so, set that as new buy price.
At each iteration check if current price is higher than buy and also higher than sell and index is greater than buyIndex. If so, set that as new sell price.

Technical explanation:
If current iteration value (i.e. current price) is less than the buy price, or if current price is equal to 0,
    set buy to the current price and buyIndex to current iteration index (i).
If current price is less than the buy value (or if it is the first iteration), set buy value to current price and buyIndex to current index.
If current price is greater than the buy value and if i is greater than buy index, set sell value to current price.
If sell minus buy is greater than max (and buyIndex is greater than i), set max to sell minus buy.

***DISCLAIMER: This is not financial advice. This is also not investment advice.***
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0
  let buy = 0
  let buyIndex = 0
  let sell = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] === 0) {
      buy = 0
      buyIndex = i
    }
    if (prices[i] < buy || i === 0) {
      buy = prices[i]
      buyIndex = i
    }
    if (prices[i] > buy && i > buyIndex) {
      sell = prices[i]
    }
    if (sell - buy > max && i > buyIndex) max = sell - buy
  }
  return max
}
