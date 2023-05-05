/*
1456. Maximum Number of Vowels in a Substring of Given Length
Medium
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

Example 1:
Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.

Example 2:
Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.

Example 3:
Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.

Constraints:
1 <= s.length <= 105
s consists of lowercase English letters.
1 <= k <= s.length
*/

/*
Given a string, s, consisting of various letters. Given also an integer, k.
Return the maximum number of vowels in any substring of length k.
See above for examples.
Calculate substring of length k from beginning of string. 
Iterate through all possible substrings from the beginning of the string to the last possible position such that every substring must be of length k.
Return the maximum number of vowels of any given substring.
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const arr = s.split``.map((ltr) => ('aeiou'.includes(ltr) ? 1 : 0))
  let i = 0
  let streak = arr.slice(i, k + i).reduce((a, c) => (a += c), 0)
  let max = streak

  while (i <= s.length - k) {
    if (arr[i] == 1) streak--
    if (arr[i + k] == 1) streak++
    max = Math.max(streak, max)
    i++
  }

  return max
}
