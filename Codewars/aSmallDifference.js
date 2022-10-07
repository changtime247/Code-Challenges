// 6 kyu
// A small difference
// Write a function that given two strings determines if they differ by exactly one character.
// The difference may consist of one charater being added, removed or replaced, in which case the function must return true. In all other cases it must return false.
// Examples:
// tower / towe -> true
// tower / towner -> true
// tower / bower -> true
// tower / token -> false
// tower / tower -> false

// ----------------------
// Parameter: Given two strings.
// Return true if two strings differ by exactly one character (i.e. whether that one character is non-existent in the other string, or simply just a different letter when comparing the two strings)
// Otherwise, return false.
// Truthy examples:
// oneCharDifference('grant', 'gant')    'grant and gant differ by one letter, r in s1 but missing in s2'
// oneCharDifference('grant', 'granty')  'grant and granty differ by one letter, y in s2 but missing in s1'
// oneCharDifference('grant', 'grent')   'grant and grent differ by one letter, a in s1 but it's e in s2'
// oneCharDifference('grant', 'grannt')  'grant and grannt differ by one letter, n in s2 but missing in s1'
// Falsy examples:
// oneCharDifference('grant', 'grant')   'same string'
// oneCharDifference('grant', 'grrrant') 'grant and grrrant differ by more than one letter (rr)'
// oneCharDifference('grant', 'gren')    'grant and gren differ by more than one letter (a in s1 but it's e in s2 AND t in s1 but missing in s2)'
// oneCharDifference('grantoo', 'grant') 'grantoo and grant differ by more than one letter (oo)'
// Pseudocode:
// Iterate through all characters of one string.
// At each iteration, splice out that specific character from both strings.
// After all iterations, what remains, should be either
// (1) length of 1 if concatenated (b/c a letter was missing from the complementary string), OR
// (2) each of length 1 AND the index of the differing letters of their respective originating strings are the same (b/c the letters at same corresponding index don't match - 'grant' and 'grent').
// Otherwise, return false.

function oneCharDifference(s1, s2) {
  let s1a = s1.split``
  let copy = s1.split``
  let s2a = s2.split``
  for (let i = 0; i < s1a.length; i++) {
    if (s2a.includes(s1a[i])) {
      s2a.splice(s2a.indexOf(s1a[i]), 1)
      copy.splice(copy.indexOf(s1a[i]), 1)
    }
  }
  return (
    copy.length + s2a.length === 1 ||
    (copy.length === 1 &&
      s2a.length === 1 &&
      s1.indexOf(copy[0]) === s2.indexOf(s2a[0]))
  )
}
