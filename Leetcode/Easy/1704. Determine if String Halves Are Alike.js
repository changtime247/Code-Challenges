/*
1704. Determine if String Halves Are Alike
Easy
1.6K
79
Companies
You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.

Example 1:
Input: s = "book"
Output: true
Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

Example 2:
Input: s = "textbook"
Output: false
Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice.

Constraints:
2 <= s.length <= 1000
s.length is even.
s consists of uppercase and lowercase letters.
*/

/*
Given a string (mix of lower and upper case).
Return whether string's left half has same amount of vowels as right half (a vowel is a vowel, regardless of case).
Iterate through string halves.
For each half, create tally up the vowels.
After end of iteration, if left half tally count is equal to right half's, return true; otherwise, false.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  return tallyUp(s.slice(0, s.length / 2)) === tallyUp(s.slice(s.length / 2))
}

function tallyUp(str) {
  return str.split``.reduce(
    (a, c) => ('aeiouAEIOU'.includes(c) ? a++ : a, a),
    0
  )
}
