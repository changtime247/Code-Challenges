// 7 kyu
// Find Duplicates
// Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.
// Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).
// Examples
// [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
// [0, 1, 2, 3, 4, 5]                ==>  []

// Given an array of different values.
// Return an array of all the duplicate values, in the order that they appear in the arg-array.
// See above for examples.
// Create different objects to hold the different values according to data type.
// Create an empty array.
// Iterate through arg-array:
//      If first time appearing, record value to respective data-type object.
//      If second time appearing, update respective object and push to newly created array.

function duplicates(arr) {
  let nums = {}
  let strs = {}
  let newArr = []
  for (const v of arr) {
    let ref = nums
    if (v === v.toString()) ref = strs
    if (!ref[v]) {
      ref[v] = 1
    } else if (ref[v] == 1) {
      newArr.push(v)
      ref[v]++
    }
  }
  return newArr
}
