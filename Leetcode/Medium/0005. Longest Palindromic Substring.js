/*
5. Longest Palindromic Substring
Medium

22112

1271

Add to List

Share
Given a string s, return the longest palindromic substring in s.

A string is called a palindrome string if the reverse of that string is the same as the original string.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
*/

/*
Given a string, consists only of digits and letters
Return the longest palindrome substring
Ex: 
longestPalindrome("babad"), "bab" (or "aba")
longestPalindrome("cbbd"), "bb"
Create helper function that simply returns boolean indicating whether string argument passed in is a palindrome
Iterate through the length of the string in a staggered fashion: 
Longest palindrome to check will be the string itself.
    If not palindrome, check string without 1 char (not rearraging string)
    Now with 2 chars. 3, 4...
Return the string once found since it is asking for the longest
*/

/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
  function isPaly(s) {
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
      if (s[i] !== s[s.length - 1 - i]) {
        return false
      }
    }
    return true
  }

  let paly = ''
  let d = 0
  while (paly.length < 1) {
    for (let i = 0; i <= d; i++) {
      const checkThis = s.slice(i, s.length - d + i)
      if (isPaly(checkThis)) {
        paly = checkThis
        break
      }
    }
    d++
  }
  return paly
}

function pairs(k, arr) {                
  const points = new Set(arr)           
  let count = 0                         
  for (let i = 0; i < arr.length; i++) {
    if (points.has(arr[i] + k)) count++ 
  }                                     
  return count                          
}                                       
