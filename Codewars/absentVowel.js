// 7 kyu
// Absent vowel
// Your job is to figure out the index of which vowel is missing from a given string:
// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.
// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

// Given a string of alphabet letters.
// Return the index of the missing letter in the string 'aeiou'.
// Ex:
// absentVowel("John Doe hs seven red pples under his bsket"), 0
// absentVowel("Bb Smith sent us six neatly arranged range bicycles"), 3
// Iterate through string-argument, recording only the vowels.
// Iterate through the recorded vowels to cross-reference with 'aeiou'
// Return the index of the missing vowel (using 'aeiou' as the string from which to get the index to be returned).

function absentVowel(x) {
  const vowels = 'aeiou'
  const inclVowels = x.split``.reduce((a, c) => {
    c = c.toLowerCase()
    return 'aeiou'.includes(c) && !a.includes(c) ? (a += c) : a
  }, '')
  for (let i = 0; i < vowels.length; i++) {
    if (!inclVowels.includes(vowels[i])) return vowels.indexOf(vowels[i])
  }
}
