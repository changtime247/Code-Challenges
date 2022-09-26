// 7 kyu
// Check three and two
// 441193% of 7591,187 of 2,931matdlu2 Issues Reported
// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.
// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

// ----------------------
// Parameter: Given an array of exactly 5 letters. Letters can be only "a", "b", or "c".
// Return boolean value indicating whether of the 5 letters, 3 are exactly the same and the other 2 are exactly the same.
// Examples:
// checkThreeAndTwo(["a", "a", "a", "b", "b"]), true
// checkThreeAndTwo(["a", "c", "a", "c", "b"]), false
// checkThreeAndTwo(["a", "a", "a", "a", "a"]), false
// Pseudocode:
// Create an object with 3 properties set to each letter, and values set to 0.
// Iterate through array and increment corresponding property-value of newly created object.
// Check to see if the values of the object contains, 3 and 2 (regardless of what letters).

function checkThreeAndTwo(array) {
  let obj = array.reduce((a, c) => {
    a[c] >= 0 ? a[c]++ : (a[c] = 1)
    return a
  }, {})
  return (
    Object.values(obj).toString().split`,`.sort((a, b) => b - a).join`` === '32'
  )
}
