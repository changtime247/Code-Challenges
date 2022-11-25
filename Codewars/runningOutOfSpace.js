// 7 kyu
// Running out of space
// Kevin is noticing his space run out!
// Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace'].

// Given an array of strings.
// Return an array of strings, such that each successive string contains all the preceding strings (no delimiter).
// Examples:
// spacey(['kevin', 'has','no','space']),
//      [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']
// spacey(['this','cheese','has','no','holes']),
//      ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']
// Iterate through array and at each successive iteration, concat with preceding values.

function spacey(array) {
  return array.reduce((a, c, i) => {
    a.push([a[i - 1] || [], c].join``)
    return a
  }, [])
}
