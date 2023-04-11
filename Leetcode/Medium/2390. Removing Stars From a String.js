/*
2390. Removing Stars From a String
You are given a string s, which contains stars *.

In one operation, you can:
Choose a star in s.
Remove the closest non-star character to its left, as well as remove the star itself.
Return the string after all stars have been removed.

Note:
The input will be generated such that the operation is always possible.
It can be shown that the resulting string will always be unique.

Example 1:
Input: s = "leet**cod*e"
Output: "lecoe"
Explanation: Performing the removals from left to right:
- The closest character to the 1st star is 't' in "leet**cod*e". s becomes "lee*cod*e".
- The closest character to the 2nd star is 'e' in "lee*cod*e". s becomes "lecod*e".
- The closest character to the 3rd star is 'd' in "lecod*e". s becomes "lecoe".
There are no more stars, so we return "lecoe".

Example 2:
Input: s = "erase*****"
Output: ""
Explanation: The entire string is removed, so we return an empty string.

Constraints:
1 <= s.length <= 105
s consists of lowercase English letters and stars *.
The operation above can be performed on s.
*/

/*
Given a string containing only lowercase alphabet letters and/or stars.
Return a new string containing only the corresponding lowercase alphabet letters such that letters to the left of the stars are removed (two or more stars mean that two or more letters to the left of the stars should be removed)
Create a new variable initialized to an empty array.
Iterate through arg-string,
    If not a star, push to array.
    If star, pop from array.
*/

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let arr = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '*') {
      arr.pop()
    } else {
      arr.push(s[i])
    }
  }
  return arr.join``
}
