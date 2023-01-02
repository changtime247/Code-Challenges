/*
290. Word Pattern
Easy
5.6K
654
Companies
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

Example 1:
Input: pattern = "abba", s = "dog cat cat dog"
Output: true

Example 2:
Input: pattern = "abba", s = "dog cat cat fish"
Output: false

Example 3:
Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false

Constraints:
1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lowercase English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space.
*/

/*
Given a pattern as a string of letters (w/o spaces) and corresponding string of words corresponding to the pattern (separated by a space).
Return boolean value indicating whether pattern matches string of words.
Iterate through pattern and map it to an object.
Iterate through object values to see if no duplicated values (i.e. all values should be unique).
Length of pattern and count of words of string should also be same. 
*/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const splitd = s.split` `
  let obj = {}
  for (let i = 0; i < splitd.length; i++) {
    if (!obj.hasOwnProperty([pattern[i]])) obj[pattern[i]] = splitd[i]
    if (obj[pattern[i]] !== splitd[i]) return false
  }
  let allKeys = Object.values(obj)
  return allKeys.length === [...new Set(allKeys)].length
}
