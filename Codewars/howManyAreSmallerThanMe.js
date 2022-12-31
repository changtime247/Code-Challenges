// 7 kyu
// How many are smaller than me?
// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.
// For example:
// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]

// Given an array of numbers, num
// Return an array of numbers such that the value at index i represents how many values to the right of num[i] are smaller than num[i]
// Create an empty array.
// Iterate through num. At each iteration,
//      create another loop to go through each of the remaining values (to the right)
//          In that inner loop, count how many are smaller that outer loop iteration value
//      push the count to newly created array.

function smaller(nums) {
  let arr = []

  for (let i = 0; i < nums.length - 1; i++) {
    let c = 0
    for (let j = 0; j < (nums.slice(i + 1).length || nums.length); j++) {
      if (nums[i] > nums.slice(i + 1)[j]) c++
    }
    arr.push(c)
  }
  return arr.push(0)
}
