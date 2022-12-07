// 7 kyu
// Common Substrings
// Given 2 strings, your job is to find out if there is a substring that appears in both strings. You will return true if you find a substring that appears in both strings, or false if you do not. We only care about substrings that are longer than one letter long.
// #Examples:
// *Example 1*
// SubstringTest("Something","Fun"); //Returns false
// *Example 2*
// SubstringTest("Something","Home"); //Returns true
// In the above example, example 2 returns true because both of the inputs contain the substring "me". (soMEthing and hoME)
// In example 1, the method will return false because something and fun contain no common substrings. (We do not count the 'n' as a substring in this Kata because it is only 1 character long)
// #Rules: Lowercase and uppercase letters are the same. So 'A' == 'a'.
// We only count substrings that are > 1 in length.
// #Input: Two strings with both lower and upper cases. #Output: A boolean value determining if there is a common substring between the two inputs.

// Given two strings
// Return boolean indicating whether the two strings have a common substring
// SubstringTest("Something","Home"), true
// SubstringTest("Something","Fun"), false
// Find all possible substrings of two char length two, preserving order, of the shorter of two strings.
// Loop through checking whether any are contained in the longer string.
// If so, immediately return true.
// Return false otherwise.

function SubstringTest(str1, str2) {
  let shorter
  let longer
  if (str1.length < str2.length) {
    shorter = str1
    longer = str2
  } else {
    shorter = str2
    longer = str1
  }
  let arr = []
  for (let i = 0; i < shorter.length - 1; i++) {
    arr.push(`${shorter[i]}${shorter[i + 1]}`)
  }
  for (let i = 0; i < arr.length; i++) {
    if (longer.toLowerCase().includes(arr[i].toLowerCase())) return true
  }
  return false
}
