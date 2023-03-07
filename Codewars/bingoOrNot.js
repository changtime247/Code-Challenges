// 7 kyu
// Bingo ( Or Not )
// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.
// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

// Given an array of integers.
// If the array contains all the letters of 'BINGO' (i.e. 2, 7, 9, 14, 15, corresponds to letters of BINGO) return 'WIN'.
// Else, return 'LOSE'.
// Iterate through arg-array.
// After iterating through all the values, if one of the integers (from above) is missing, return 'LOSE'.
// Otherwise, return 'WIN'.

function bingo(a) {
  const bingo = [2, 7, 9, 14, 15]
  let arr = []
  for (const val of a) {
    if (bingo.includes(val) && !arr.includes(val)) arr.push(val)
  }
  return arr.length === bingo.length ? 'WIN' : 'LOSE'
}
