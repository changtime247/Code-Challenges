/*
49. Group Anagrams
Medium
14.5K
424
Companies
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]

Constraints:
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/

/*
Given an array of strings. Some string(s) can be an anagram of other string(s).
Return an array of subarrays grouped by anagrams.
See above for examples.
Create a hash map in which the key is a alphabetically sorted anagram and the value is an array of string(s) matching that anagram.
Return the values of the hash map.
*/

var groupAnagrams = function (strs) {
  return Object.values(
    [...strs].reduce((acc, str) => {
      let sortedStr = str.split``.sort().join``
      if (sortedStr in acc) acc[sortedStr].push(str)
      else acc[sortedStr] = [str]
      return acc
    }, {})
  )
}
