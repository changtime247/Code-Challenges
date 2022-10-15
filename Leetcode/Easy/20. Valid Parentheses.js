/*
20. Valid Parentheses
Easy

16151

814

Add to List

Share
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

/*
Given a string possibly containing a character from this set of characters: '(', ')', '[', ']', '{', or '}'
Return a boolean indicating whether the string is properly formatted.
Proper format: 1. closed same type
2. closed in order
3. nesting possible, but again must be in order.
Create an empty array to serve as our stack.
Create a map of corresponding brackets (key = open bracket, value = close bracket)
Iterate through string from left to right.
If map has the character, then it's an opener and push matching closer to stack. 
If map does not have the character, then it's a closer. Pop off stack and check if two closer values are the same. If not, immediately return false. 
Return if stack is clean.
*/

var isValid = function (s) {
  let stack = []
  const map = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ])
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      stack.push(map.get(s[i]))
      console.log(stack)
    } else if (s[i] !== stack.pop()) {
      return false
    }
  }
  return stack.length === 0
}
