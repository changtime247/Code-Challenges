// 7 kyu
// List of Presents
// Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.
// Write a function to help Leo out. The first parameter of the function is Leo's budget; the second one is an array containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.
// Example:
// Maximum budget: 20
// Gift List: [13, 2, 4, 6, 1]
// Should return 4.
// _ NOTE: All numbers will be integers >= 0, and the array will never be empty. _

// Given a number, representing a budget, and an array of various numbers, each representing the cost of a gift.
// Return the max number of gifts that can be bought with the budget.
// Ex:
// howManyGifts(20, [13, 2, 4, 6, 1]), 4
// howManyGifts(0, [1]), 0
// Buy gifts, starting with the least expensive gifts. So sort the array of gifts.
// While there is still budget, iterate through the array. At each iteration, subtract from the budget.
// Return the number of items bought with the budget.

function howManyGifts(maxBudget, gifts) {
  gifts.sort((a, b) => a - b)
  let count = 0
  let i = 0
  while (maxBudget > 0) {
    maxBudget -= gifts[i]
    i++
    maxBudget >= 0 && count++
  }
  return count
}
