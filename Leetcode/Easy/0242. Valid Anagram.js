/*
242. Valid Anagram
Easy
8.5K
277
Companies
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

/*
Given two strings, consisting of lowercase English letters.
Return boolean indicating whether t is an anagram of s (all letters of s must be used in t - order is irrelevant).
If the lengths are not equal, return false.
Create two arrays, one for each string. Each array has 26 indices to account for the letters of the alphabet. Each index is initialized to value 0.
Iterate through entire length of either string.
    At each iteration increment the corresponding index (a is at index 0, b at 1, c at 2, d at 3, etc.)
Return whether the two resulting arrays are exactly the same.
*/

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  let sArr = Array(26).fill(0)
  let tArr = Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    sArr[s.charCodeAt(i) - 97] += 1
    tArr[t.charCodeAt(i) - 97] += 1
  }
  if (sArr.join`` === tArr.join``) return true
  else return false
}
