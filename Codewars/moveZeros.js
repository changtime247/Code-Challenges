// 7 kyu
// Move Zeros
// Implement a function move_zeros which takes two arguments first an array of numbers arrNum and second a Boolean value isRight (default is true) and returns the array with all zero to right if isRight is true else to left if isRight is false.
// Example:
// arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
// move_zeros(arrNum, true) //=> returns [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]
// arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
// move_zeros(arrNum, false) //=> returns [0, 0, 0, 0, 12, 10, 8, 12, 7, 6, 4, 10, 12]
// arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
// move_zeros(arrNum) //=> returns [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]
// Tips: Order of other numbers should not change.

// Given an array of numbers, and a boolean indicating whether the array should be arranged with all 0s to the right-end (true) or left-end (false).
// Return an array with all numbers with same order except all 0s moved to the right or left according to the arg-boolean.
// See above for examples.
// Create two pointers, left (initialized to 0) and right (initialized to 1).
// Iterate through array with loop.
//      If left pointer is 0 and right pointer is non-0, then swap and increment left pointer.
//      If left and right pointers are 0, then increment only the right pointer.
//      Otherwise increment both.
// If the arg-boolean is false, then reverse the array before swap-loop and after swap-loop.

function move_zeros(arrNum, isRight = true) {
  if (!isRight) arrNum.reverse()
  let l = 0
  let r = 1
  while (r < arrNum.length) {
    if (arrNum[l] == 0 && arrNum[r] != 0) {
      ;[arrNum[l], arrNum[r]] = [arrNum[r], arrNum[l]]
      l++
    } else if (arrNum[l] == 0 && arrNum[r] == 0) {
      r++
    } else {
      l++
      r++
    }
  }
  if (!isRight) arrNum.reverse()
  return arrNum
}
