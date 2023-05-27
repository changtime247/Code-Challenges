// 7 kyu
// Product of Largest Pair
// Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in a unique array of positive numbers.
// All inputs will be valid.
// Passing [2, 6, 3] should return 18, the product of [6, 3].
// Disclaimer: only accepts solutions that are faster than his, which has a running time O(nlogn).
// maxProduct([2, 1, 5, 0, 4, 3])              // 20
// maxProduct([7, 8, 9])                       // 72
// maxProduct([33, 231, 454, 11, 9, 99, 57])   // 104874

// Given an array of positive integers.
// Return the greatest possible product of any two integers of the array.
// Ex:
// maxProduct([56, 335, 195, 443, 6, 494, 252]), 218842
// maxProduct([154, 428, 455, 346]), 194740
// maxProduct([39, 135, 47, 275, 37, 108, 265, 457, 2, 133, 316, 330, 153, 253, 321, 411]), 187827
// maxProduct([136, 376, 10, 146, 105, 63, 234]), 87984
// maxProduct([354, 463, 165, 62, 472, 53, 347, 293, 252, 378, 420, 398, 255, 89]), 218536
// maxProduct([346, 446, 26, 425, 432, 349, 123, 269, 285, 93, 75, 14]), 192672
// maxProduct([134, 320, 266, 299]), 95680
// maxProduct([114, 424, 53, 272, 128, 215, 25, 329, 272, 313, 100, 24, 252]), 139496
// maxProduct([375, 56, 337, 466, 203]), 174750
// Create two variables initialized to 0 in order to record the greatest and second greatest integers of array.
// Iterate through array to record variables.
// Return product.

function maxProduct(a) {
  let largest = 0
  let secondLargest = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i] > largest && a[i] > secondLargest) {
      secondLargest = largest
      largest = a[i]
    } else if (a[i] < largest && a[i] > secondLargest) secondLargest = a[i]
  }
  return largest * secondLargest
}
