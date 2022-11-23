/*
409. Longest Palindrome
Easy
4K
233
Companies
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Example 1:
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

Example 2:
Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

Constraints:
1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.
*/

/*
Given a string consisting of only lowercase and/or uppercase English letters.
Return longest panlindrome that can be built with those letters, using any combination of string's letters.
Create an object, initially empty, to hold count of all characters. 
Iterate through string to take count of all letters, respecting lower and upper case difference.
Once finished with iteration, figure out which letter has the largest odd count.
Iterate through the object and add up all the even counts and the largest odd count.
If the largest odd count is 1, then return the total count of even count + 1. 
If the largest odd count is greater than 1, then return the total count of even count + count of the largest odd count + 1.
Else return the total count of even count.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  if (s.length === 1) return 1
  let largestOddCount = 0
  let countOfAllEvens = 0
  let countOfOddsGreaterThanOneLessOneForEach = 0
  let obj = s.split``.reduce((a, v) => ((a[v] = (a[v] || 0) + 1), a), {})
  for (const key in obj) {
    if (obj[key] % 2 && obj[key] > largestOddCount) largestOddCount = obj[key]
    if (obj[key] % 2 === 0) countOfAllEvens += obj[key]
    if (obj[key] !== 1 && obj[key] % 2)
      countOfOddsGreaterThanOneLessOneForEach += obj[key] - 1
  }
  if (largestOddCount === 1) {
    return countOfAllEvens + 1
  } else if (countOfOddsGreaterThanOneLessOneForEach) {
    return countOfAllEvens + countOfOddsGreaterThanOneLessOneForEach + 1
  } else {
    return countOfAllEvens
  }
}
