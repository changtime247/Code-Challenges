/*
921. Minimum Add to Make Parentheses Valid
Medium

A parentheses string is valid if and only if:
It is the empty string,
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
You are given a parentheses string s. In one move, you can insert a parenthesis at any position of the string.

For example, if s = "()))", you can insert an opening parenthesis to be "(()))" or a closing parenthesis to be "())))".
Return the minimum number of moves required to make s valid.

Example 1:
Input: s = "())"
Output: 1

Example 2:
Input: s = "((("
Output: 3

Constraints:
1 <= s.length <= 1000
s[i] is either '(' or ')'.
*/

/*
Given a non-empty string consisting of "(" and/or ")".
Return the number of insertions needed to make a "valid" parentheses (i.e. all parenthesis have a corresponding parenthesis).
Example:
minAddToMakeValid("()))(("), 4
  - Explanation: parenthesis marks at indices 2,3,4,5 need corresponding parenthesis
Create two variables, one for openers and closers.
Iterate through string to count openers and closers.
If string is opener, increment open count.
If string is closer and open count is positive, decrement close.
If string is closer and open count is zero, increment close count.
Return sum of counts
*/

/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let openCount = 0
  let closeCount = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') openCount++
    else if (openCount > 0) openCount--
    else closeCount++
  }
  return openCount + closeCount
}
