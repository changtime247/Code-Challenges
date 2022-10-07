// 6 kyu
// Most profit from stock quotes
// Return the most profit from stock quotes.
// Stock quotes are stored in an array in order of date. The stock profit is the difference in prices in buying and selling stock. Each day, you can either buy one unit of stock, sell any number of stock units you have already bought, or do nothing. Therefore, the most profit is the maximum difference of all pairs in a sequence of stock prices.
// @param {array} quotes
// @return {number} max profit
// Example:
//  [ 1, 2, 3, 4, 5, 6 ]        => 15  (buy at 1,2,3,4,5 and then sell all at 6)
//  [ 6, 5, 4, 3, 2, 1 ]        => 0   (nothing to buy for profit)
//  [ 1, 6, 5, 10, 8, 7 ]       => 18  (buy at 1,6,5 and sell all at 10)
//  [ 1, 2, 10, 3, 2, 7, 3, 2 ] => 26  (buy at 1,2 and sell them at 10. Then buy at 3,2 and sell them at 7)

// ----------------------
// Parameter: Given an array of non-negative integers, representing stock price on consecutive days.
// (Note: only one share can be bought per day but more than one share can be sold per day)
// Return an integer representing the maximum profit possible.
// Examples:
// getMostProfitFromStockQuotes([ 1, 2, 3, 4, 5, 6 ])                               -->  15
// getMostProfitFromStockQuotes([ 6, 5, 4, 3, 2, 1 ])                               -->  0
// getMostProfitFromStockQuotes([ 1, 6, 5, 10, 8, 7 ])                              -->  18
// getMostProfitFromStockQuotes([ 1, 2, 10, 3, 2, 7, 3, 2 ])                        -->  26
// getMostProfitFromStockQuotes([ 31, 312, 3, 35, 33, 3, 44, 123, 126, 2, 4, 1 ])   -->  798
// Pseudocode:
// Create three variables set to 0.
// One represents the number of shares in possession at any given moment.
// Another represents the amount spent (or invested).
// And the other represents the proceeds from any sale.
// Slice, sort array in descending order and set to another variable. This will be our sell trigger array.
// Create one more variable set to 0 to be a counter for sell trigger array. Every sell event will be based on this array.
// Create a for loop iterating through every element in the non-sorted argument.
// At every iteration:
// If the price is below the first element of the sorted array, then buy. Add one to shares count and add price to spent variable.
// If the price is equal to the first element of the sorted array, then buy. Sell all shares (set to 0) and add entire proceeds to proceeds variable.
// Before the end of each iteration, splice the sorted array to delete the price of the day (This is because the opportunity to sell at that particular price has passed)
// Outside of loop, return difference between sold and spent.

function getMostProfitFromStockQuotes(quotes) {
  let spent = 0,
    sold = 0,
    shares = 0,
    j = 0,
    descending = quotes.slice().sort((a, b) => b - a)
  for (let i = 0; i < quotes.length; i++) {
    if (quotes[i] < descending[j] && i < quotes.length - 1) {
      spent += quotes[i]
      shares++
    } else if (quotes[i] === descending[j]) {
      sold += shares * quotes[i]
      shares = 0
    }
    descending.splice(descending.indexOf(quotes[i]), 1)
  }
  return sold - spent
}
