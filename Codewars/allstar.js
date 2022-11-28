// 7 kyu
// All Star Code Challenge #3
// This Kata is intended as a small challenge for my students
// Create a function, called removeVowels (or remove_vowels), that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").
// removeVowels("drake") // => "drk"
// removeVowels("aeiou") // => ""

// Given a string with different letters
// Return string with vowels removed
// Iterate through each letter of string
//      concat if vowel
//      and do not concat if vowel

var removeVowels = function (str) {
  return str.split``.reduce((a, c) => {
    if (!'aeiou'.includes(c)) a += c
    return a
  }, '')
}
