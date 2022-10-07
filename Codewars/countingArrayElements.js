// 7 kyu
// Counting Array Elements
// Write a function that takes an array and counts the number of each unique element present.
// count(['james', 'james', 'john'])
// #=> { 'james': 2, 'john': 1}

// ----------------------
// Parameter: Given an array of various string expressions
// Return an object, which has each unique expression as a property and a count of number of occurrences of the expression as the value
// Examples:
// count([])                               -->  {}
// count([ 'a' ])                          -->  { a: 1 }
// count([ 'a', 'a', 'b', 'b', 'b' ])      -->  { a: 2, b: 3 }
// count([ '', 'a', true, 15, 'b', 'b' ])  -->  { '15': 1, '': 1, a: 1, true: 1, b: 2 }
// count([ 'Saotome-agase' ])              -->  { 'Saotome-agase': 1 }
// count([ 'Hayato Jin', 'Musashi Tomoe', 'Hayato Jin', 'Benkei Kurama', 'Musashi Tomoe', 'Ryoma Nagare', 'Michiru Saotome' ])
//                                         -->  { 'Hayato Jin': 2, 'Musashi Tomoe': 2, 'Benkei Kurama': 1, 'Ryoma Nagare': 1, 'Michiru Saotome': 1 }
// Pseudocode:
// Use reduce method on array to return a single value, an object.
// If accumulator, initially an empty object, has the property, add one to it. Else, set it equal to one (first occurrence)
// Return entire expression.

function count(array) {
  return array.reduce((a, k) => (k in a ? (a[k] += 1) : (a[k] = 1)) && a, {})
}
