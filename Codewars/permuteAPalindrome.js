// 6 kyu
// Permute a Palindrome
// Write a function that will check whether ANY permutation of the characters of the input string is a palindrome. Bonus points for a solution that is efficient and/or that uses only built-in language functions. Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.
// For this kata assume that all characters are lowercase.
// Example
// madam -> True
// adamm -> True
// junk -> False
// Hint
// The brute force approach would be to generate all the permutations of the string and check each one of them whether it is a palindrome. However, an optimized approach will not require this at all.

// Given a string.
// Return boolean indicating whether the string or any of its permutations is a palindrome.
// Ex:
// permuteAPalindrome("a"), true
// permuteAPalindrome("aa"), true
// permuteAPalindrome("aaa"), true
// permuteAPalindrome("baa"), true
// permuteAPalindrome("aab"), true
// permuteAPalindrome("baabcd"), false
// permuteAPalindrome("racecars"), false
// permuteAPalindrome("abcdefghba"), false
// permuteAPalindrome(""), true
// Create an object to store each unique character of string and its respective count.
// Any even numbered count can be disregarded.
// The number of odd numbered count should only be 0 or 1.
// If the number of odd numbered count is greater than 1, then that string nor its permutations cannot be a palindrome.

function permuteAPalindrome(input) {
  let obj = input.split``.reduce((a, c) => {
    a[c] = (a[c] || 0) + 1
    return a
  }, {})

  let arr = Object.values(obj).reduce((a, c) => {
    if (c % 2) a.push(c % 2)
    return a
  }, [])

  return arr.length <= 1
}
