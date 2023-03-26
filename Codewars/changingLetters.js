// 7 kyu
// Changing letters
// When provided with a String, capitalize all vowels
// For example:
// Input : "Hello World!"
// Output : "HEllO WOrld!"
// Note: Y is not a vowel in this kata.

// Given a string.
// Return string of same chars except all vowels are capitalized.
// Ex:
// swap(""), ""
// swap("   @@@"), "   @@@"
// swap("HelloWorld!"), "HEllOWOrld!"
// swap("Sunday"), "SUndAy"
// swap("Codewars"), "COdEwArs"
// swap("Monday"), "MOndAy"
// swap("Friday"), "FrIdAy"
// swap("abracadabra"), "AbrAcAdAbrA"
// swap("AbrAcAdAbrA"), "AbrAcAdAbrA"
// swap("ABRACADABRA"), "ABRACADABRA"
// swap("aBRaCaDaBRa"), "ABRACADABRA"
// Create an empty string variable.
// Iterate through all letters of string
//      if vowel, capitalized and concat.
//      if non-vowel, concat.

function swap(string) {
  return string.split``.reduce(
    (a, c) => ('AEIOUaeiou'.includes(c) ? (a += c.toUpperCase()) : (a += c)),
    ''
  )
}
