// 6 kyu
// Sort Arrays (Ignoring Case)
// Sort the given array of strings in alphabetical order, case insensitive. For example:
// ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
// ["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]

// Given an array of strings.
// Return an alphabetically sorted array of strings without taking case into consideration.
// See above for examples.
// Use localeCompare.

function sortme(names) {
  return names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
}
