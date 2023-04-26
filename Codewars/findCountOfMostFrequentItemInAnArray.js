// 7 kyu
// Find Count of Most Frequent Item in an Array
// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0
// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5
// The most frequent number in the array is -1 and it occurs 5 times.

// Given an array of various items.
// Return the count of the most frequently occurring item.
// Ex:
// mostFrequentItemCount([3, -1, -1]), 2
// mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]), 5
// Iterate through array to create an object of values corresponding to count of that value's frequency.
// Return the highest frequency count.

function mostFrequentItemCount(collection) {
  let freq = { max: 0 }
  for (let i = 0; i < collection.length; i++) {
    freq[collection[i]] = (freq[collection[i]] || 0) + 1
    if (freq[collection[i]] > freq.max) freq.max = freq[collection[i]]
  }
  return freq.max
}
