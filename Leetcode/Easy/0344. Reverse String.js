/*
344. Reverse String
Easy
6.6K
1K
Companies
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

Constraints:
1 <= s.length <= 105
s[i] is a printable ascii character.
*/

/*
Given an array of single characters.
No return. Instead modify the array such that it is reversed.
Iterate through array and swap places from outermost pair to innermost pair.
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function (s) {
  for (let i = 0; i < s.length / 2; i++) {
    ;[s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]]
  }
}

/*
JS's built in Array method
var reverseString = function(s) {
    s.reverse()
};
*/
