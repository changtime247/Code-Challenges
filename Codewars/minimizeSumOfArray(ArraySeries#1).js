// 7 kyu
// Minimize Sum Of Array (Array Series #1)
// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always has even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22)
// Explanation:
// The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22
// minSum({12,6,10,26,3,24}) ==> return (342)
// Explanation:
// The minimum sum obtained from summing each two integers product , 26*3 + 24*6 + 12*10 = 342
// minSum({9,2,8,7,5,4,0,6}) ==> return (74)
// Explanation:
// The minimum sum obtained from summing each two integers product , 9*0 + 8*2 +7*4 +6*5 = 74

// ----------------------
// Parameters: Given an array of positive integers
// Return the lowerst possible sum dervied from the products of the pairs of integers (combination of the pairs will matter)
// Examples:
// minSum([5, 4, 2, 3])                -->   22
// minSum([12, 6, 10, 26, 3, 24])      -->   342
// minSum([9, 2, 8, 7, 5, 4, 0, 6])    -->   74
// Pseudocode:
// Create a variable to store our minimum sum, initially set to 0.
// Sort array ascending order.
// Iterate through array, but in twos, since we need the product of pairs.
// Use a for loop but only for half the length.
// At each iteration, take a pair,
// staring with the outermost pair and working your way in (i.e. to the inner most pair),
// add the product of the pair to the newly created variable.
// (Note: the array will always have an even number of elements)
// Return the minimum sum.

function minSum(arr) {
  let minSum = 0
  let aL = arr.length
  let sortedArr = arr.sort((a, b) => a - b)
  for (let i = 0; i < aL / 2; i++) {
    minSum += sortedArr[i] * sortedArr[aL - 1 - i]
  }
  return minSum
}
