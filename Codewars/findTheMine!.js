// 6 kyu
// Find the Mine!
// You've just discovered a square (NxN) field and you notice a warning sign. The sign states that there's a single bomb in the 2D grid-like field in front of you.
// Write a function mineLocation/MineLocation that accepts a 2D array, and returns the location of the mine. The mine is represented as the integer 1 in the 2D array. Areas in the 2D array that are not the mine will be represented as 0s.
// The location returned should be an array (Tuple<int, int> in C#) where the first element is the row index, and the second element is the column index of the bomb location (both should be 0 based). All 2D arrays passed into your function will be square (NxN), and there will only be one mine in the array.
// Examples:
// mineLocation( [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] ) => returns [0, 0]
// mineLocation( [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] ) => returns [1, 1]
// mineLocation( [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] ) => returns [2, 1]

// ----------------------
// Parameter: Given a 2-D array (all subarrays are the same length). All elements will be 0, except one 1 (representing the 'mine').
// Return the location of the 1, formatted as an array of length 2:
// index 0 holds value of the index of the subarray that holds the mine and
// index 1 holds value of the index within that subarray that holds the mine.
// Examples:
// mineLocation([ [ 1, 0 ], [ 0, 0 ] ])                                              --> [0, 0]
// mineLocation([ [ 1, 0 ], [ 0, 0 ] ])                                              --> [0, 0]
// mineLocation([ [ 0, 1 ], [ 0, 0 ] ])                                              --> [0, 1]
// mineLocation([ [ 1, 0 ], [ 0, 0 ] ])                                              --> [0, 0]
// mineLocation([ [ 0, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 0 ] ])                           --> [1, 1]
// mineLocation([ [ 0, 0, 1 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ])                           --> [0, 2]
// mineLocation([ [ 1, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ])                           --> [0, 0]
// mineLocation([ [ 0, 0, 0 ], [ 0, 0, 1 ], [ 0, 0, 0 ] ])                           --> [1, 2]
// mineLocation([ [ 0, 1, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ])  --> [0, 1]
// mineLocation([ [ 0, 0, 0, 0 ], [ 1, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ])  --> [1, 0]
// mineLocation([ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 1, 0 ] ])  --> [3, 2]
// mineLocation([ [ 0, 0, 1, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ])  --> [0, 2]
// mineLocation([ [ 0, 0, 0, 0, 0 ],
//                 [ 0, 0, 0, 1, 0 ],
//                 [ 0, 0, 0, 0, 0 ],
//                 [ 0, 0, 0, 0, 0 ],
//                 [ 0, 0, 0, 0, 0 ] ])    --> [1, 3]
// mineLocation([ [ 0, 0, 0, 0, 0 ],
//                 [ 1, 0, 0, 0, 0 ],
//                 [ 0, 0, 0, 0, 0 ],
//                 [ 0, 0, 0, 0, 0 ],
//                 [ 0, 0, 0, 0, 0 ] ])    --> [1, 0]
// mineLocation([ [ 0, 0, 0, 0, 0 ],
//                 [ 0, 0, 0, 0, 0 ],
//                 [ 0, 0, 0, 0, 0 ],
//                 [ 0, 0, 0, 1, 0 ],
//                 [ 0, 0, 0, 0, 0 ] ])    --> [3, 3]
// mineLocation([ [ 0, 0, 0, 0, 1 ],
//                 [ 0, 0, 0, 0, 0 ],
//                 [ 0, 0, 0, 0, 0 ],
//                 [ 0, 0, 0, 0, 0 ],
//                 [ 0, 0, 0, 0, 0 ] ])    --> [0, 4]
// Pseudocode:
// Loop through array looking for the index of the subarray holding the mine.
// Once found, loop through subarray to find the index that holds the mine.
// Return the two index values as an array.

function mineLocation(field) {
  let found = false,
    i = 0
  while (!found) {
    if (field[i].includes(1)) return [i, field[i].indexOf(1)]
    else i++
  }
}
