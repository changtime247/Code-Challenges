/*
1502. Can Make Arithmetic Progression From Sequence
Easy
A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.
Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.

Example 1:
Input: arr = [3,5,1]
Output: true
Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.

Example 2:
Input: arr = [1,2,4]
Output: false
Explanation: There is no way to reorder the elements to obtain an arithmetic progression.

Constraints:
2 <= arr.length <= 1000
-106 <= arr[i] <= 106
*/

/*
Given an array of numbers.
Return a boolean indicating whether the difference between any two consecutive number will remain constant.
Ex:
canMakeArithmeticProgression([3,5,1]), true
canMakeArithmeticProgression([1,2,4]), true
canMakeArithmeticProgression([-68,-96,-12,-40,16]), true
canMakeArithmeticProgression([-13,-17,-8,-10,-20,2,3,-19,2,-18,-5,7,-12,18,-17,12,-1]), false
Iterate through a sorted copy of array to check if difference every two consecutive numbers is the same.
If not, break loop and return false.
*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  let r = arr.slice().sort((a, b) => a - b)
  const diff = Math.abs(r[1] - r[0])
  let isAP = true

  for (let i = 1; i < r.length - 1; i++) {
    if (diff != Math.abs(r[i] - r[i + 1])) {
      isAP = false
      break
    }
  }

  return isAP
}
