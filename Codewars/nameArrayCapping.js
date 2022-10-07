// 7 kyu
// Name Array Capping
// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

// ----------------------
// Parameter: Given an array of names.
// Return an array with those names capitalized.
// Examples:
// capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
// capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
// Pseudocode:
// Iterate through array
// At each iteration, return the resulting string concatenated from capitalized first letter and lowercased rest of the letters.

function capMe(names) {
  return names.map(
    (name) => name[0].toUpperCase() + name.slice(1).toLowerCase()
  )
}
