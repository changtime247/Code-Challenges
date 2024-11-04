/*
https://leetcode.com/problems/string-compression-iii/description/?envType=daily-question&envId=2024-11-04
3163. String Compression III
Medium

Given a string word, compress it using the following algorithm:

Begin with an empty string comp. While word is not empty, use the following operation:
Remove a maximum length prefix of word made of a single character c repeating at most 9 times.
Append the length of the prefix followed by c to comp.
Return the string comp.

Example 1:
Input: word = "abcde"
Output: "1a1b1c1d1e"
Explanation:
Initially, comp = "". Apply the operation 5 times, choosing "a", "b", "c", "d", and "e" as the prefix in each operation.
For each prefix, append "1" followed by the character to comp.

Example 2:
Input: word = "aaaaaaaaaaaaaabb"
Output: "9a5a2b"
Explanation:
Initially, comp = "". Apply the operation 3 times, choosing "aaaaaaaaa", "aaaaa", and "bb" as the prefix in each operation.
For prefix "aaaaaaaaa", append "9" followed by "a" to comp.
For prefix "aaaaa", append "5" followed by "a" to comp.
For prefix "bb", append "2" followed by "b" to comp.

Constraints:
1 <= word.length <= 2 * 105
word consists only of lowercase English letters.
*/

/*
Given a string.
Return a "compressed" version of given string.
To compress:
  if a char does not repeat consecutively, in compression string, include '1' and the char.
  if a char repeats more than once consecutively, the compression string should include number of consecutive occurrences along with the char. And for occurences greater than 9, reset the occurrence count.
Ex:
compressedString("o"), "1o"
compressedString("vvv"), "3v"
compressedString("xbbbbjj"), "1x4b2j"
compressedString("uuuuuuuuuuccccccvvvvvvvyyyyyyyylyyyqqqqqqqqqoaqqqq"), "9u1u6c7v8y1l3y9q1o1a4q"
compressedString("yyyyyyyyyyyyyttttttttttttttttttttttttttttttttttttttttttttttttttvvvvvvvvvvvvvvvvvvvvvvvvvaaaaaaaaaajj"), "9y4y9t9t9t9t9t5t9v9v7v9a1a2j"
Initialize and empty string, comp.
Iterate through given string.
  If not last letter of given string and letter is same as previous one and letter count is less than 9, increment.
  Otherwise, concatenate number of occurrences of previous letter and the previous letter to initialized string. Update letter and count.
*/

/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function (word) {
  let comp = ''
  let ltr = word[0]
  let ltrCount = 0

  for (let i = 0; i <= word.length; i++) {
    if (i < word.length && word[i] === ltr && ltrCount < 9) {
      ltrCount++
    } else {
      comp += `${ltrCount}${ltr}`
      ltr = word[i]
      ltrCount = 1
    }
  }

  return comp
}
