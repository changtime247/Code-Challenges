// 7 kyu
// Insert dashes
// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.
// Note that the number will always be non-negative (>= 0).

// ----------------------
// Parameter: Given a non-negative number.
// Return a string version of that number, in which all consecutive odd numbers have a dash in the middle of the pair.
// Examples:
// insertDash(454793),'4547-9-3'
// insertDash(123456),'123456'
// insertDash(1003567),'1003-567'
// Pseudocode:
// Create an empty string variable.
// Iterate through every digit of the argument number. Concatenate digit, as a string, to newly created string.
// While iterating, if the previous digit is odd and current digit is odd as well, add a dash before the current digit.
// Return string variable.

function insertDash(num) {
  return num.toString().split``.reduce((a, k, i, r) => {
    if (i > 0 && r[i - 1] % 2 && k % 2) {
      a += `-${k}`
    } else a += k
    return a
  }, '')
}
