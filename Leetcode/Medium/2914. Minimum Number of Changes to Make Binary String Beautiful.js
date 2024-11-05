/*
https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/description/?envType=daily-question&envId=2024-11-05
2914. Minimum Number of Changes to Make Binary String Beautiful
Medium

You are given a 0-indexed binary string s having an even length.

A string is beautiful if it's possible to partition it into one or more substrings such that:

Each substring has an even length.
Each substring contains only 1's or only 0's.
You can change any character in s to 0 or 1.

Return the minimum number of changes required to make the string s beautiful.

Example 1:
Input: s = "1001"
Output: 2
Explanation: We change s[1] to 1 and s[3] to 0 to get string "1100".
It can be seen that the string "1100" is beautiful because we can partition it into "11|00".
It can be proven that 2 is the minimum number of changes needed to make the string beautiful.

Example 2:
Input: s = "10"
Output: 1
Explanation: We change s[1] to 1 to get string "11".
It can be seen that the string "11" is beautiful because we can partition it into "11".
It can be proven that 1 is the minimum number of changes needed to make the string beautiful.

Example 3:
Input: s = "0000"
Output: 0
Explanation: We don't need to make any changes as the string "0000" is beautiful already.

Constraints:
2 <= s.length <= 105
s has an even length.
s[i] is either '0' or '1'.
*/

/*
Given a binary string.
Return the number of moves it takes to make the string beautiful.
(Note: a beautiful string is partitioned into substrings of length 2 and each substring consists of the same char)
minChanges("000011000000"), 0
minChanges("111101101110"), 3
minChanges("10010100000111001101011000000010110011"), 8
minChanges("0101000000000000111001000001100011100001101011111110000000100010101101000101001011001010101101110001010011110011011111011110010111110100111011001110110100000010100011111010111100010101001111100111110010000101101011000010111010000100000110110001100000001011000101010000101000000000111000101111010011010101101011001110011011111001101111011100000101110000111101101011111100110000010100111010101011111000000110010101001110100010111011110110100001010101110001010101111001011110110110010101100110010111000001010101011101010101001000111101000010110011010100000011111110000100111011100111"), 141
Initialize counter at 0.
Iterate through string in pairs. If pair is not same char, increment counter.
Return counter.
*/

/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function (s) {
  let count = 0
  for (let i = 0; i < s.length; i += 2) {
    if (s[i] !== s[i + 1]) count++
  }
  return count
}
