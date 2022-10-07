// 7 kyu
// Filter Coffee
// You love coffee and want to know what beans you can afford to buy it.
// The first argument to your search function will be a number which represents your budget.
// The second argument will be an array of coffee bean prices.
// Your 'search' function should return the stores that sell coffee within your budget.
// The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.

// ----------------------
// Parameter: Given a string.
// Return a count of all the consonants in the string.
// Examples:
// search(3, [6, 1, 2, 9, 2])            -->  '1,2,2'
// search(14, [7, 3, 23, 9, 14, 20, 7])  -->  '3,7,7,9,14'
// search(0, [6, 1, 2, 9, 2])            -->  ''
// Pseudocode:
// Given a budget (a positive integer) and an array of numbers (several bags of coffee beans).
// Filter the array for afforadble bags of coffee. 
// Return joined array (comma delimiter).

function search(budget, prices) {
  return prices.filter((n) => n <= budget).sort((a, b) => a - b) + ''
}