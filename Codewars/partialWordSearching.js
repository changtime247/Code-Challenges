// 7 kyu
// Partial Word Searching
// Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.
// The method takes two parameters, the query string and the array of strings to search, and returns an array.
// If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)
// Examples
// If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].

// Given a string and an array of strings.
// Return an array of the strings (from the arg-array) containing the arg-string as a substring.
// If the filter results is empty, return ['Empty']
// Ex:
// wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"]
// wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"]
// wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"]), ["aB", "Abc", "zAB"]
// wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"]), ["Empty"]
// Filter the arg-array for strings that contain the arg-string.
// If the filter results is empty, return ['Empty']

function wordSearch(query, seq) {
  const arr = seq.filter((s) => s.toLowerCase().includes(query.toLowerCase()))
  return arr.length > 0 ? arr : ['Empty']
}
