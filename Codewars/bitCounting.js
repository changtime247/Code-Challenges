// 6 kyu
// Bit Counting
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// Given an integer.
// Return the number of times '1' appears in the binary representation of the argument.
// Turn into string and filter for only '1's.

var countBits = function (n) {
  return n.toString(2).split``.filter((x) => x == 1).length
}
