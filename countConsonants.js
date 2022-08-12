// 7 kyu
// Count consonants
// Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.
// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

// ----------------------
// Parameter: Given a string.
// Return a count of all the consonants in the string.
// Examples:
// consonantCount('')                     -->  0
// consonantCount('aaaaa')                -->  0
// consonantCount('XaeiouX')              -->  2
// consonantCount('Bbbbb')                -->  5
// consonantCount('helLo world')          -->  7
// consonantCount('h^$&^#$&^elLo world')  -->  7
// consonantCount('0123456789')           -->  0
// consonantCount('012345_Cb')            -->  2
// Pseudocode:
// Create a count initialized to 0.
// Any letter besides aeiou, whether upper or lower case needs to be counted.
// Iterate through string and increment count by 1 for every consonant.
// Return count.

function consonantCount(str) {
  let count = 0
  str.split``.forEach((e) =>
    'bcdfghjklmnpqrstvwxyz'.includes(e.toLowerCase()) ? count++ : ''
  )
  return count
}
