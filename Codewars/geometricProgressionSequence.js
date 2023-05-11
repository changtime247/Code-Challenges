// 7 kyu
// Geometric Progression Sequence
// In your class, you have started lessons about geometric progression. Since you are also a programmer, you have decided to write a function that will print first n elements of the sequence with the given constant r and first element a.
// Result should be separated by comma and space.
// Example
// geometricSequenceElements(2, 3, 5) == '2, 6, 18, 54, 162'
// More info: https://en.wikipedia.org/wiki/Geometric_progression

// Given (1) a starting integer of a sequence,
// (2) a constant by which the next consecutive integer of sequence can derived by multiplying,
// and (3) the number of items in the sequence.
// Return the sequence as a string (separated by ', ')
// Ex:
// geometricSequenceElements(2, 3, 5), '2, 6, 18, 54, 162'
// geometricSequenceElements(2, 2, 10), '2, 4, 8, 16, 32, 64, 128, 256, 512, 1024'
// geometricSequenceElements(1, -2, 10), '1, -2, 4, -8, 16, -32, 64, -128, 256, -512'
// Create an array with the first element as the starting integer of the sequence.
// Create a loop as long as the array length is less than the number of items that should in the sequence.
//      Push into array the next integer in sequence by multiplying the constant to the current sequence item.

function geometricSequenceElements(a, r, n) {
  let arr = [a]
  while (n > 1) {
    arr.push(arr[arr.length - 1] * r)
    n--
  }
  return arr.join(', ')
}
