// 7 kyu
// ONE ONe One one
// Write
// function consecutiveOnes(nums) {}
// that takes in array nums and returns the maximum consecutive 1's
// For example
// consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]) === 3
// consecutiveOnes([1, 1, 0, 0, 1]) === 2
// consecutiveOnes([0, 0, 0, 0, 0]) === 0
// PLEASE NOTE THAT THIS KATA HAS HEAVY PERFORMANCE TESTS AND YOU NEED OPTIMIZED CODE TO PASS IT

// Given an array filled with 1s and 0s.
// Return the length of the longest consecutive 1s within the array.
// Ex:
// consecutiveOnes([1, 1, 1, 1, 1]), 5
// consecutiveOnes([0, 0, 0, 0, 0]), 0
// consecutiveOnes([0, 0, 0, 0, 1]), 1
// Iterate through array with a counter and result variable.
//      If iteration value is 1, increase counter and replace result if counter is greater.
//      Otherwise, reset counter.

function consecutiveOnes(nums) {
  let max = 0
  let consec = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == '1') {
      consec++
      max = Math.max(max, consec)
    } else {
      consec = 0
    }
  }
  return max
}
