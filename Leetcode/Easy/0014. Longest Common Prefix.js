/*
14. Longest Common Prefix
Easy

10785

3450

Add to List

Share
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
Accepted
1,931,097
Submissions
4,746,477
*/

/*
Given an array of strings
Return the longest common prefix
strs = ["flower","flow","flight"]
strs = ["dog","racecar","car"]
Create a common variable to hold longest common prefix. 
Iterate through array to find common letters.
If letter at index i is the same for all strings, then add that to the common prefix.
Otherwise, break.
Return the common prefix.
*/

/*
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
  let longestWord = ''
  let commonPrefix = ''
  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length > longestWord.length) longestWord = strs[i]
  }
  for (let i = 0; i < longestWord.length; i++) {
    let mapped = strs.map((str) => str[i])
    if (mapped.length > 0 && [...new Set(mapped)].length < 2) {
      commonPrefix += mapped[0]
    } else {
      break
    }
  }
  return commonPrefix
}
