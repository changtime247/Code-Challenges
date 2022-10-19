/*
3. Longest Substring Without Repeating Characters
Medium

29560

1258

Add to List

Share
Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

/*
Given a string
Return the longest substring that does not include any repeating character
Ex:
Input: lengthOfLongestSubstring("abcabcbb"), "abc"
Input: lengthOfLongestSubstring("bbbbb"), "b"
Input: lengthOfLongestSubstring("pwwkew"), "wke"
Create two markers, a and b: a at index 0 and b at index 1.
While the second marker is less than length of string, take substring from marker a to marker b
If that substring does not contain duplicates, set that as the longest string.
    Increment marker b by 1
If that substring contains a duplicate, increment marker a by 1 and marker b by 1.
Return the length of longest substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let i = 0
  let j = 1
  let longestSub = ''
  while (j - 1 < s.length) {
    const sub = s.slice(i, j)
    if (sub.length === [...new Set(sub)].length) {
      if (sub.length > longestSub.length) {
        longestSub = sub
      }
    } else {
      i += 1
    }
    j++
  }
  return longestSub.length
}
