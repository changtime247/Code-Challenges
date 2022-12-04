// 7 kyu
// MinMinMax
// Given an unsorted array of integers, find the smallest number in the array, the largest number in the array, and the smallest number between the two array bounds that is not in the array.
// For instance, given the array [-1, 4, 5, -23, 24], the smallest number is -23, the largest number is 24, and the smallest number between the array bounds is -22. You may assume the input is well-formed.
// You solution should return an array [smallest, minimumAbsent, largest]
// The smallest integer should be the integer from the array with the lowest value.
// The largest integer should be the integer from the array with the highest value.
// The minimumAbsent is the smallest number between the largest and the smallest number that is not in the array.
// minMinMax([-1, 4, 5, -23, 24]); //[-23, -22, 24]
// minMinMax([1, 3, -3, -2, 8, -1]); //[-3, 0, 8]
// minMinMax([2, -4, 8, -5, 9, 7]); //[-5, -3,9]

// Given an array of numbers.
// Return an array consisting of:
//  a. smallest number of array
//  b. smallest number in between a and c but not in array
//  c. largest number of array
// minMinMax([-1, 4, 5, -23, 24]), [-23, -22, 24]
// minMinMax([1, 3, -3, -2, 8, -1]), [-3, 0, 8]
// minMinMax([2, -4, 8, -5, 9, 7]), [-5, -3, 9]
// Sort array in ascending order
// a and c are corresponding numbers (smallest and largest)
// To find b, iterate by incrementing from a by 1 to look for next smallest number but not in array
// Return a, b and c, once b is found

function minMinMax(array) {
  let sorted = array.sort((a, b) => a - b)
  let nextSmallest
  for (let i = 0; i < sorted.length; i++) {
    if (!sorted.includes(sorted[i] + 1)) {
      nextSmallest = sorted[i] + 1
      return [sorted[0], nextSmallest, sorted[array.length - 1]]
    }
  }
}
