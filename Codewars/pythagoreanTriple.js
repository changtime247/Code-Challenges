// 8 kyu
// Pythagorean Triple
// Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.
// A Pythagorean Triple consists of arranging 3 integers, such that:
// a2 + b2 = c2
// Examples
// [5, 3, 4] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52
// [3, 4, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52
// [13, 12, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 52 + 122 = 132
// [100, 3, 999] : it is NOT possible to form a Pythagorean Triple using these 3 integers - no matter how you arrange them, you will never find a way to satisfy the equation a2 + b2 = c2
// For JavaScript: return true or false

// Given an array of three numbers.
// Return boolean indicating whether the numbers can form a pythagorean triple.
// Sort the array.
// Check whether largest to power of 2 is equal sum of other two, each raised to power of 2

function isPythagoreanTriple(integers) {
  let sorted = integers
    .slice()
    .sort((a, b) => b - a)
    .map((n) => Math.pow(n, 2))
  return sorted[0] === sorted[1] + sorted[2]
}
