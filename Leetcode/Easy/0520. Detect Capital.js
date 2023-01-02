/*
520. Detect Capital
Easy
1.9K
385
Companies
We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Given a string word, return true if the usage of capitals in it is right.

Example 1:
Input: word = "USA"
Output: true

Example 2:
Input: word = "FlaG"
Output: false

Constraints:
1 <= word.length <= 100
word consists of lowercase and uppercase English letters.
*/

/*
Given a string.
Return boolean indicating whether the string fits in one of the categories:
- All letters are capitals.
- All letters are not capitals.
- Only the first letter is capital.
Use equality operator to check whether current string is equal to any one of the three categories.
*/

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (
    word.toUpperCase() === word ||
    word.toLowerCase() === word ||
    `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}` === word
  )
    return true
  return false
}
