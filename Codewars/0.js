// 6 kyu
// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
// For example, a tower with 3 floors looks like this:
// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:
// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]
// Go challenge Build Tower Advanced once you have finished this :)

// Given a positive integer, n.
// Return an array of strings all of length n such that the strings make a pyramid using '*' and/ or empty spaces.
// See above for examples.
// Create an empty array.
// Iterate from 1 to n:
//      At each iteration, create a string of length n with successive floors having '*' added to either side.
// Floor 1 (i.e. value at index 0) should have one asterisk in the middle.
// Floor 2 (i.e. value at index 1) should have three asterisks in the middle.
// Floor 3 (i.e. value at index 2) should have five asterisks in the middle.
// Floor 4 (i.e. value at index 2) should have seven asterisks in the middle.
// and so on...
// Each floor should have empty spaces to "pad" the start and end of string.

function towerBuilder(nFloors) {
  let arr = []
  for (let i = 1; i <= nFloors; i++) {
    let str = '*'.repeat(i * 2 - 1)
    let before = ' '.repeat(nFloors - i)
    let after = ' '.repeat(nFloors - i)
    str = before + str + after
    arr.push(str)
  }
  return arr
}
