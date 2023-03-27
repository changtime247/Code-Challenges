// 7 kyu
// Unique string characters
// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.
// For example:
// solve("xyab","xzca") = "ybzc"
// --The first string has 'yb' which is not in the second string.
// --The second string has 'zc' which is not in the first string.
// Notice also that you return the characters from the first string concatenated with those from the second string.
// More examples in the tests cases.
// Good luck!
// Please also try Simple remove duplicates

// Given two strings.
// Return a string of chars from str1 that do not appear in str2 concatenated with chars from str2 that do not appear from str1.
// Ex:
// solve("xyab","xzca"), "ybzc"
// solve("xyabb","xzca"), "ybbzc"
// solve("abcd","xyz"), "abcdxyz"
// solve("xxx","xzca"), "zca"
// Create variable initialized to empty string.
// Iterate through str1 and if that char is not present in str2, add to new variable.
// Iterate through str2 and if that char is not present in str1, add to new variable.

function solve(a, b) {
  function findUncommon(str1, str2) {
    return str1.split``.reduce(
      (acc, cur) => (!str2.includes(cur) ? (acc += cur) : acc),
      ''
    )
  }

  return findUncommon(a, b) + findUncommon(b, a)
}
