/*
383. Ransom Note
Easy
3.4K
389
Companies
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true

Constraints:
1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
Accepted
658.8K
Submissions
1.1M
Acceptance Rate
57.7%
*/

/*
Given two strings, one as a ransomNote and the other as a magazine.
Return whether the magazine contains all the letters of ransomNote (each letter counts as 1 letter)
Create two objects from each argument string, in which the object has all the unique letters as properties and count of that letter as key.
Iterate through ransomNote object to see if magazineObject contains all the letters of it.
Return true if it does, false if any are missing.
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  function tallyUp(str) {
    return str.split``.reduce((a, c) => ((a[c] = (a[c] || 0) + 1), a), {})
  }
  let ran = tallyUp(ransomNote)
  let mag = tallyUp(magazine)
  for (const ltr in ran) {
    if (!mag[ltr] || mag[ltr] < ran[ltr]) return false
  }
  return true
}
