// 6 kyu
// Check if two words are isomorphic to each other
// Two strings a and b are called isomorphic if there is a one to one mapping possible for every character of a to every character of b. And all occurrences of every character in a map to same character in b.
// Task
// In this kata you will create a function that return True if two given strings are isomorphic to each other, and False otherwise. Remember that order is important.
// Your solution must be able to handle words with more than 10 characters.
// Examples of true:
// CBAABC DEFFED
// XXX YYY
// RAMBUNCTIOUSLY THERMODYNAMICS
// Examples of false:
// AB CC
// XXY XYY
// ABAB CD

// Given two strings, a and b.
// Return boolean indicating whether the two strings are isomorphic.
// (i.e. every distinct char of a maps to exactly only one distinct char of b corresponding to the same index)
// See above for examples.
// Length must be same. Otherwise return false.
// Create a hash map by iterating through corresponding index and making a key-value pair (i.e. char at a to char at b).
//      If at any point in iteration, an incompatible key-pair arises (b/c a key is already mapped or a value is already mapped), return false.

function isomorph(a, b) {
  if (a.length != b.length) return false
  let record = {}
  for (let i = 0; i < a.length; i++) {
    if (!record[a[i]] && !Object.values(record).includes(b[i])) {
      record[a[i]] = b[i]
    } else {
      if (record[a[i]] != b[i]) return false
    }
  }
  return true
}
