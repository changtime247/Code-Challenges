// 7 kyu
// What dominates your array?
// A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
// For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
// The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
// Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.

// Given an array of values.
// Return the dominator of the array. If no dominator, return -1.
// The dominator is the most frequently occuring value of array and it must occur more than half the time in array.
// Ex:
// dominator([3,4,3,2,3,1,3,3]),3
// dominator([1,2,3,4,5]),-1
// dominator([1,1,1,2,2,2]),-1
// dominator([1,1,1,2,2,2,2]),2
// Create a hash map.
// Sort hash map.
// Return the most frequently occurring value, which must occur more than half of arr.length.
// Otherwise, return -1.

function dominator(arr) {
  let hash = arr.reduce((a, c) => (a[c] = (a[c] || 1) + 1) && a, {})
  const entries = Object.entries(hash).sort((a, b) => b[1] - a[1])
  if (entries[0][1] <= arr.length / 2 || entries[0][1] === entries[1][1])
    return -1
  return +entries[0][0]
}
