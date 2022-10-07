// 6 kyu
// Counting Duplicates

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// ----------------------
// Parameters: Given a string
// Return a number,
// which represents the number of different character(s) that appear(s) more than once in string (case-insensitive)
// Examples:
// duplicateCount("")                       -->    0 (empty string returns 0)
// duplicateCount("abcde")                  -->    0 (no characters repeat)
// duplicateCount("aabbcde")                -->    2 (two a's and 2 b's)
// duplicateCount("aabBcde"),               -->    2 (two a's and 2 b's, cases are irrelevant)
// duplicateCount("Indivisibility")         -->    1 (i is only char that repeats)
// duplicateCount("Indivisibilities")       -->    2 (i and s)
// duplicateCount("abcdefghABCDabcabA")     -->    4 (repeated chars in string: 'a', 'b', 'c', 'd')
// duplicateCount("abcdefghABCDabcaba")     -->    4 (repeated chars in string: 'a', 'b', 'c', 'd')
// duplicateCount("abcdefABCabA")           -->    3 (repeated chars in string: 'a', 'b', 'c')
// duplicateCount("abcdefabcABA")           -->    3 (repeated chars in string: 'a', 'b', 'c')
// Pseudocode: 
// Since casing does not matter, reassign text as itself but all lowercase.
// Create new variable with value of a new set instance.
// Split and iterate through the string argument.
// At each iteration, add to the set, the letter(s) everytime there is a letter that appears more than once in string.
// If string is split at a certain letter and the length is greater than 2, then that letter appears more than once in string.
// Return the length of set using size property of set object

function duplicateCount(text){
  let ans = new Set();
  text = text.toLowerCase();
  text.split``.forEach((e) => (text.split(e).length > 2 ? ans.add(e) : ans));
  return ans.size;
}