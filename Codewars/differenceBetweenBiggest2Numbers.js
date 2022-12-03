// 7 kyu
// Difference between biggest 2 numbers
// You have an array of non-negative integers. You need to calculate the difference between the 1st biggest number and the 2nd biggest number of the array.
//     diffBig2([10, 5, 2]);
// In this case, the 1st biggest number is 10 and the 2nd biggest number is 5. So, the function returns 5, the result of 10 - 5.
// You can assume that the input array has 2 or more elements.
// The input array has the sort method disabled, so you will have to solve it in another way.

// Given an array of numbers.
// Return the difference between the greatest and second greatest numbers.
// diffBig2([2, 1]), 1
// diffBig2([8, 3, 1]), 5
// diffBig2([1, 8, 3]), 5
// Find max of arr.
// Filter arr and see if there is more than one of the same max.
// If so, return 0.
// Otherwise, find max of filtered arr (max being filtered out)
// Return difference between max1 and max2.

function diffBig2(arr) {
  let max1 = Math.max(...arr)
  let arrFiltered = arr.filter((n) => n < max1)
  if (arr.length - arrFiltered.length > 1) return 0
  let max2 = Math.max(...arrFiltered)
  return max1 - max2
}
