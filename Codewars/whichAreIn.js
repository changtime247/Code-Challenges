// 6 kyu
// Which are in?
// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
// Example 1:
// a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]
// Example 2:
// a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns []
// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: In some languages r must be without duplicates.

// Given two arrays, both of strings.
// Return an array of strings, which are from the first argument-array and also substrings of a string from the second argument-array.
// Create an array to hold valid substrings.
// Iterate through first array to check whether it is a substring of any string in the second array.
// If it is add to newly created array.

function inArray(array1, array2) {
  return array1.filter((str) => array2.join` `.includes(str)).sort()
}
