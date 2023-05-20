// 6 kyu
// Reverse Vowels In A String
// In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:
// "Hello!" => "Holle!"
// "Tomatoes" => "Temotaos"
// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
// For simplicity, you can treat the letter y as a consonant, not a vowel.

// Given a string.
// Return a new string which has all the vowel positions reversed and all consonants in the same position.
// See above for examples.
// Iterate through string-arg twice.
// First iteration is to get an array of vowels
// Second iteration is to create a new string with all vowels' positions reversed (e.g. first is last, second is second to last...)

function reverseVowels(str) {
  let vowels = str.split``.reduce(
    (a, c) => ('aeiouAEIOU'.includes(c) ? a.unshift(c) : a) && a,
    []
  )
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    if ('aeiouAEIOU'.includes(str[i])) newStr += vowels.shift()
    else newStr += str[i]
  }
  return newStr
}
