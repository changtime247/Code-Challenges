// 6 kyu
// Longest palindrome
// A palindrome is a series of characters that read the same forwards as backwards such as "hannah", "racecar" and "lol".
// For this Kata you need to write a function that takes a string of characters and returns the length, as an integer value, of longest alphanumeric palindrome that could be made by combining the characters in any order but using each character only once. The function should not be case sensitive.
// For example if passed "Hannah" it should return 6 and if passed "aabbcc_yYx_" it should return 9 because one possible palindrome would be "abcyxycba".

// Given a string.
// Return number representing the longest possible palindrome from any combination of letters in arg-string (each char of string can be used once, at most)
// Create a variable, count, set to 0, to record the length of longest possible palindrome.
// Iterate through string, to tally up number of occurrences of each alphanumeric char. Record to an object.
// Iterate through object, adding to count, the count of all chars with an even number of occurrences. Chars with odd number of occurrences should be counted as (n-1).
// If there is one or more chars with odd number of occurences, return count + 1
// Else return count

function longestPalindrome(str) {
  let odd = false
  let len = 0
  let obj = str.toLowerCase().split``.reduce((a, c) => {
    if ('abcdefghijklmnopqrstuvwxyz0123456789'.includes(c))
      a[c] = (a[c] || 0) + 1
    return a
  }, {})
  for (const key in obj) {
    if (obj[key] % 2 === 0) {
      len += obj[key]
    } else {
      odd = true
      len += obj[key] - 1
    }
  }
  if (odd) return ++len
  return len
}
