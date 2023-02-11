// 6 kyu
// Only Duplicates
// Given a string, remove any characters that are unique from the string.
// Example:
// input: "abccdefee"
// output: "cceee"

// Given a string.
// Return a new string of characters that are non-unique (i.e. argument string contains at least two of that char)
// Ex:
// onlyDuplicates('abccdefee'), 'cceee'
// onlyDuplicates('hello'), 'll'
// onlyDuplicates('colloquial'), 'ollol'
// onlyDuplicates('foundersandcoders'), 'ondersndoders'
// Create a new empty string.
// Iterate through argument. And at each iteration:
//      if that index of that char and the lastIndex of that char are not equal, that char should be concatenated to the new string.

function onlyDuplicates(str) {
  return str.split``.reduce(
    (a, c, i, r) => (r.indexOf(c) === r.lastIndexOf(c) ? a : (a += c)),
    ''
  )
}
