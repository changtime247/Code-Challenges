/*
670. Maximum Swap
Medium
You are given an integer num. You can swap two digits at most once to get the maximum valued number.

Return the maximum valued number you can get.

Example 1:
Input: num = 2736
Output: 7236
Explanation: Swap the number 2 and the number 7.

Example 2:
Input: num = 9973
Output: 9973
Explanation: No swap.

Constraints:
0 <= num <= 108
*/

/*
Given a number
Return the maximum number possible if one swap can be performed (swapping one digit for another)
If given number is already maximum number, return it.
Example:
maximumSwap(3), 3
maximumSwap(1993), 9913
maximumSwap(56867898), 96867858
maximumSwap(98800435), 98850430
maximumSwap(89999999), 99999998
Steps:
Convert the number to an array.
Create a sorted version of the array.
Store the last occurrence of each digit.
Iterate through unsorted array cross-referencing the sorted array and identify the first mismatch.
If mismatched, perform swap and return the result as number.
*/

/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  let arr = `${num}`.split``
  let arrDesc = arr.slice().sort((a, b) => b - a)
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = i
  }
  for (let i = 0; i < arr.length; i++) {
    let temp
    if (arr[i] != arrDesc[i]) {
      temp = arr[i]
      arr[i] = arrDesc[i]
      arr[obj[arrDesc[i]]] = temp
      break
    }
  }
  return parseInt(arr.join``)
}
