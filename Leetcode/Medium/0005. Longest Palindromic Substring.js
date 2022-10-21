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
    let paly = ''
    let d = 0
    while(paly.length < 1) {
        for(let i=0; i<=d; i++){
            const checkThis = s.slice(i, s.length-d+i)
            if(isPaly(checkThis)){
                paly = checkThis
                break
            }
        }
        d++
    }
    return paly || s[0]
}
const isPaly = (str) => {
    return str === str.split``.reverse().join``
}



// var longestPalindrome = function (s) {
//   let l = 0
//   let r = s.slice().length
//   while (l !== r) {
//     const sub = s.slice(l, r)
//     let subL = sub.length
//     for (let i = 0; i < sub.length / 2; i++) {
//       if (sub[i] === sub[sub.length - 1 - i]) subL -= 2
//     }
//     if (subL <= 0) {
//       return sub
//     } else {
//       if (l === s.length - r) {
//         r--
//       } else if (l < s.length - r) {
//         r++ && l++
//       } else if (l > s.length - r) {
//         r -= 2
//       }
//     }
//   }
//   return s[0]
// }