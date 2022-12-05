// 7 kyu
// Grid index
// You are given an n by n ( square ) grid of characters, for example:
// [['m', 'y', 'e'],
//  ['x', 'a', 'm'],
//  ['p', 'l', 'e']]
// You are also given a list of integers as input, for example:
// [1, 3, 5, 8]
// You have to find the characters in these indexes of the grid if you think of the indexes as:
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]
// Remember that the indexes start from one and not zero.
// Then you output a string like this:
// "meal"
// All inputs will be valid.

// Given a grid of letters (n by n) and an array of numbers (both are 1-based indices).
// Return a string from the corresponding letters from the array of numbers.
// Example 1
// results1 = gridIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 2, 3, 4, 5, 6, 7, 8, 9]);
// assert.equal(results1, 'myexample');

// Example 2
// results2 = gridIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 5, 6]);
// assert.equal(results2, 'mam');

// Example 3
// results3 = gridIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 3, 7, 8]);
// assert.equal(results3, 'mepl');

// Example 4
// results4 = gridIndex([['h', 'e', 'l', 'l'], ['o', 'c', 'o', 'd'], ['e', 'w', 'a', 'r'], ['r', 'i', 'o', 'r']], [5, 7, 9, 3, 6, 6, 8, 8, 16, 13]);
// assert.equal(results4, 'ooelccddrr');
// Create a variable set to empty string to hold string to be returned.
// Flatten multi-dimensional array.
// Concat all the corresponding letters from indices to newly created variable
// (taking into consideration that we're going from 1-based to 0-based index to grab correct letters).

function gridIndex(grid, indices) {
  const flattened = [].concat(...grid)
  let string = ''
  for (let i = 0; i < indices.length; i++) {
    string += flattened[indices[i] - 1]
  }
  return string
}
