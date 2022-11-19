/*
205. Isomorphic Strings
Easy
5.4K
1K
Companies
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true

Example 2:
Input: s = "foo", t = "bar"
Output: false

Example 3:
Input: s = "paper", t = "title"
Output: true

Constraints:
1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
*/

/*
Given two strings.
Return boolean value if the two strings are isomorphic 
(i.e. each unique character of string s maps to another unique character in string t without any overlap)
Create two maps.
Iterate through each character of string s to map to string t (first map).
    and each character of string t to map to string s (second map).
While iterating, if a certain char of string s has already been mapped to a char in string t but is now overlapping to a different char in string t,
    return false.
Or, while iterating, if a certain char of string t has already been mapped to a char in string s but is now overlapping to a different char in string s,
    return false.
Return true if map is correctly formatted.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let isoMap1 = new Map()
  let isoMap2 = new Map()
  for (let i = 0; i < s.length; i++) {
    if (isoMap1.has(s[i])) {
      if (isoMap1.get(s[i]) !== t[i]) return false
    } else {
      isoMap1.set(s[i], t[i])
    }
    if (isoMap2.has(t[i])) {
      if (isoMap2.get(t[i]) !== s[i]) return false
    } else {
      isoMap2.set(t[i], s[i])
    }
  }
  return true
}
