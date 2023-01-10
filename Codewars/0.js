// 7 kyu
// Doubleton number
// We will call a natural number a "doubleton number" if it contains exactly two distinct digits. For example, 23, 35, 100, 12121 are doubleton numbers, and 123 and 9980 are not.
// For a given natural number n (from 1 to 1 000 000), you need to find the next doubleton number. If n itself is a doubleton, return the next bigger than n.
// Examples:
// doubleton(120) === 121
// doubleton(1234) === 1311
// doubleton(10) === 12

// Given a number.
// Return first "doubleton" greater than the number.
// (A doubleton number contains exactly two unique numbers for all its digits)
// Add one to the argument number.
// If that number is not a doubleton number, keep incrementing argument number by 1.

function doubleton(num) {
  while ([...new Set(`${++num}`.split``)].length !== 2) {}
  return num
}
