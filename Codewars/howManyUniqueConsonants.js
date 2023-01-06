// 7 kyu
// How Many Unique Consonants?
// Complete the function that counts the number of unique consonants in a string (made up of printable ascii characters).
// Consonants are letters used in English other than "a", "e", "i", "o", "u". We will count "y" as a consonant.
// Remember, your function needs to return the number of unique consonants - disregarding duplicates. For example, if the string passed into the function reads "add", the function should return 1 rather than 2, since "d" is a duplicate.
// Similarly, the function should also disregard duplicate consonants of differing cases. For example, "Dad" passed into the function should return 1 as "d" and "D" are duplicates.
// Examples
// "add" ==> 1
// "Dad" ==> 1
// "aeiou" ==> 0
// "sillystring" ==> 7
// "abcdefghijklmnopqrstuvwxyz" ==> 21
// "Count my unique consonants!!" ==> 7

// Given a string.
// Return the number of unique consonants of the string (disregard case)
// Iterate through the unique chars of string and tally up all non-vowels.

function countConsonants(str) {
  return [...new Set(str.toLowerCase().split``)].reduce(
    (a, c) => ('bcdfghjklmnpqrstvwxyz'.includes(c) && a++, a),
    0
  )
}
