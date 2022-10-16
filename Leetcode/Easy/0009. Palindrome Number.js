/*
9. Palindrome Number
Easy

7466

2322

Add to List

Share
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string?
*/

/*
    Given an integer.
    Return whether that integer is a palindrome.
    Iterate through the integer from the ends towards the middle.
    If even number of elements, the middle 'element' is actually two elements (b/c even).
    If odd number of elements, the middle element is could be unique (except in the case where the middle element is equal to both the left and right elements).
    While iterating,
        if any pair of elements (at index i and array.length - 1 - i) are not equal
            return false
    Return true if middle condition is not triggered
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const arr = x.toString().split``
  for (let i = 0; i < arr.length / 2; i++) {
    if (i !== arr.length - 1 - i && arr[i] !== arr[arr.length - 1 - i]) {
      return false
    }
  }
  return true
}
