/*
5 kyu
Scramblies

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:
Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.

Examples:
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
StringsPerformanceAlgorithms
*/

/*
Given two strings, str1 and str2.
Return true if str1 can be rearranged to match str2
Otherwise, return false.
(note: str1 can have extra characters not contained in str2).
(also note: character count matters)
Example:
scramble('scriptsjava','javascripts'), true 
scramble('javscripts','javascript' ), false
Count characters of str1.
Iterate through str2 to decrement counted characters of str1.
If count of any character of str1 is negative, return false.
Otherwise, return true.
*/

function scramble(str1, str2) {
  let arr1 = new Array(26).fill(0)

  for (let i = 0; i < str1.length; i++) {
    arr1[str1.charCodeAt(i) - 97] += 1
  }

  for (let i = 0; i < str2.length; i++) {
    arr1[str2.charCodeAt(i) - 97] -= 1
    if (arr1[str2.charCodeAt(i) - 97] < 0) return false
  }

  return true
}
