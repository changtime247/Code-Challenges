// 7 kyu
// Ones' Complement
// The Ones' Complement of a binary number is the number obtained by swapping all the 0s for 1s and all the 1s for 0s. For example:
// onesComplement(1001) = 0110
// onesComplement(1001) = 0110
// For any given binary number,formatted as a string, return the Ones' Complement of that number.

// Given a binary number.
// Return a string of the complement of the binary number (i.e. a number in which all 0s are swapped with 1s and 1s with 0s).
// Ex:
// onesComplement("0"), "1"
// onesComplement("1"), "0"
// onesComplement("01"), "10"
// onesComplement("10"), "01"
// onesComplement("1101"), "0010"
// Iterate through binary number as a string and replace 1s for 0s and 0s for 1s.

function onesComplement(n) {
  return n
    .toString()
    .split('')
    .reduce((a, c) => (c == '0' ? (a += '1') : (a += '0')), '')
}
