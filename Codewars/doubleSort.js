// 7 kyu
// Double Sort
// Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.
// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.
// Note that numbers written as strings are strings and must be sorted with the other strings.

// ----------------------
// Parameter: Given an array of string(s) and/or number(s). Not an empty array.
// Return an array with the numbers, in ascending order, followed by strings, in alphabetical order.
// Don't alter the data type of whatever the original array element is.
// Examples:
// dbSort([6, 2, 3, 4, 5]),
// [2, 3, 4, 5, 6])
// dbSort([14, 32, 3, 5, 5]),
// [3, 5, 5, 14, 32])
// dbSort([1, 2, 3, 4, 5]),
// [1, 2, 3, 4, 5])
// dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]),
// [0,2,2,"Apple","Banana","Mango","Orange"])
// dbSort(["C", "W", "W", "W", 1, 2, 0]),
// [0,1,2,"C","W","W","W"])
// dbSort(["Apple",46,"287",574,"Peach","3","69",78,"Grape","423"]),
// [46, 78, 574, '287', '3', '423', '69', 'Apple', 'Grape', 'Peach'])
// Pseudocode:
// Create two empty arrays.
// Iterate through argument and put in either of two arrays according to data type - string or number.
// Sort the two newly created arrays, and return a single array with elements from both.

function dbSort(a) {
  let aOfNums = []
  let aOfStrs = []
  for (let i = 0; i < a.length; i++) {
    typeof a[i] === 'string' ? aOfStrs.push(a[i]) : aOfNums.push(a[i])
  }
  return [
    ...aOfNums.sort((a, b) => a - b),
    ...aOfStrs.sort((a, b) => a.localeCompare(b)),
  ]
}
