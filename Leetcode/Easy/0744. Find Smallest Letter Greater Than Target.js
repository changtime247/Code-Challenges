/*
744. Find Smallest Letter Greater Than Target
Easy
You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.
Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

Example 1:
Input: letters = ["c","f","j"], target = "a"
Output: "c"
Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.

Example 2:
Input: letters = ["c","f","j"], target = "c"
Output: "f"
Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.

Example 3:
Input: letters = ["x","x","y","y"], target = "z"
Output: "x"
Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].

Constraints:
2 <= letters.length <= 104
letters[i] is a lowercase English letter.
letters is sorted in non-decreasing order.
letters contains at least two different characters.
target is a lowercase English letter.
*/

/*
Given an array of single lowercase letters. Also given a single target lowercase letter.
Return the smallest lexicographically that is greater letter than the taget in the array.
Create a standard, which is the character after 'z' (i.e. '{').
Iterate through array
    If greater than target letter and less than '{',
        then reassign the standard to that letter.

*/

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let res = String.fromCharCode('z'.charCodeAt(0) + 1)
  for (i = 0; i < letters.length; i++) {
    if (letters[i] > target && letters[i] < res) res = letters[i]
  }
  return res > 'z' ? letters[0] : res
}