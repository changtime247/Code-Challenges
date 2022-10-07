// 7 kyu
// Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark

// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

// ----------------------
// Parameter: Given a string of space separated words. Words may have exclamation marks.
// Return a string with all words with a single exclamation mark removed.
// Examples:
// doTest('Hi!')           -->  ''
// doTest('Hi! Hi!')       -->  ''
// doTest('Hi! Hi! Hi!')   -->  ''
// doTest('Hi Hi! Hi!')    -->  'Hi'
// doTest('Hi! !Hi Hi!')   -->  ''
// doTest('Hi! Hi!! Hi!')  -->  'Hi!!'
// doTest('Hi! !Hi! Hi!')  -->  '!Hi!'
// Pseudocode:
// Split string on space. Use reduce on array, with initial value set as empty string.
// If element includes one exclamation mark, concat to accumulator.
// Else, nothing happens. 
// Trim reduce return value and return.

function remove(string) {
  return string.split` `
    .reduce(
      (a, k, i, r) =>
        (k.includes('!') && k.indexOf('!') === k.lastIndexOf('!')
          ? a
          : (a += `${k} `)) && a,
      ''
    )
    .trim()
}