// 7 kyu
// Possibilities Array
// A non-empty array a of length n is called an array of all possibilities if it contains all numbers between [0,a.length-1].Write a method named isAllPossibilities that accepts an integer array and returns true if the array is an array of all possibilities, else false.
// Example:
// a=[1,2,0,3]
// a.length-1=3
// a includes [0,3] ,hence the function should return true

// Given an array.
// Return true if array contains all integers from 0 to array.length - 1
// Otherwise, return false.
// If the array is empty, return false.
// Otherwise, sort the array and iterate through the sorted array.
// If any value is missing, return false.
// Return true after iteration is complete.

function isAllPossibilities(x) {
  if (x.length === 0) {
    return false
  } else {
    x.sort()
    let i = 0
    for (const val of x) {
      if (val !== i) {
        return false
      } else {
        i++
      }
    }
  }
  return true
}
