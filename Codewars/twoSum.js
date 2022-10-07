// 6 kyu
// Two Sum
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

// ----------------------
// Parameters: An array of numbers, and a target number.
// Return two different indices of the array that adds up to the target number.
// Examples:
// twoSum([[1, 2, 3], 4)                   -->     [0, 2]]
// twoSum([[1234, 5678, 9012], 14690)      -->     [1, 2]]
// twoSum([[2, 2, 3], 4)                   -->     [0, 1]]
// twoSum([[2, 3, 1], 4)                   -->     [1, 2]]
// twoSum([-689, 398, 643, 597, 501, -106, -411, 136, 636, -501, -436, 354, 498], -188)
//                                         -->     [ 0, 4 ]
// twoSum([-652, 261, -206, -165, -966, 245, -39, -503, 76, -675, 302, -925, 178, 821, -714, -302, 717, 826, 984, -388, -41, 781], 678)
//                                         -->     [ 6, 16 ]
// Pseudocode:
// Use a loop within a loop to iterate through possible pairs that may add up to the target.
// Return the two indices in an array.

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j && numbers[i] + numbers[j] === target) return [i, j]
    }
  }
}
