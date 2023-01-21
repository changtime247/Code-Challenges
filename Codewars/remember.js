// 6 kyu
// Remember
// Write a function that takes a string and returns an array of the repeated characters (letters, numbers, whitespace) in the string.
// If a charater is repeated more than once, only show it once in the result array.
// Characters should be shown by the order of their first repetition. Note that this may be different from the order of first appearance of the character.
// Characters are case sensitive.
// For F# return a "char list"
// Examples:
// remember("apple") => returns ["p"]
// remember("apPle") => returns []          // no repeats, "p" != "P"
// remember("pippi") => returns ["p","i"]   // show "p" only once
// remember('Pippi') => returns ["p","i"]   // "p" is repeated first

// Given a string
// Return an array of all chars that appear more than once (), preserve original order
// Create an empty object and an empty array
// Iterate through string and record onto object the count of each char
//    While iterating, if count is greater than 1 (and is not already in the array), push char into array
// Return the array

function remember(str) {
  return str.split``.reduce(
    (a, c) => {
      a[c] = (a[c] || 0) + 1
      if (a[c] > 1 && !a.arr.includes(c)) a.arr.push(c)
      return a
    },
    { arr: [] }
  ).arr
}
