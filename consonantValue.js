// 6 kyu
// Consonant value
// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".
// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.
// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"
// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26
// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

// ----------------------
// Parameter: Given a word.
// Return the value of the consonant letter(s) separated by the vowels of the word. (value is determined by adding up the index position of letter in the alphabet - assuming index 1 based)
// Examples:
// solve("zodiac")              -->    26
// solve("chruschtschov")       -->    80
// solve("khrushchev")          -->    38
// solve("strength")            -->    57
// solve("catchphrase")         -->    73
// solve("twelfthstreet")       -->    103
// solve("mischtschenkoana")    -->    80
// Pseudocode:
// Separate string on vowels (aeiou)
// For each substring, calculate value by summing up index values (assuming index 1 based, a is 1, b 2, c 3...)
// Return the highest value derived.

function solve(s) {
  let arrVowels = ['a', 'e', 'i', 'o', 'u']
  let newS = ''
  for (let i = 0; i < s.length; i++) {
    newS += arrVowels.includes(s[i]) ? ' ' : s[i]
  }
  let vals = newS.split` `.map((subString) =>
    subString.split``.reduce((a, k) => (a += k.charCodeAt(0) - 96) && a, 0)
  )
  return Math.max(...vals)
}
