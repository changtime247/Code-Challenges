// 6 kyu
// Multiplication table
// Your task, is to create N×N multiplication table, of size provided in parameter.
// For example, when given size is 3:
// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:
// [[1,2,3],[2,4,6],[3,6,9]]

// Create an array initially containing one subarray of of size n, with values from 1 to n.
// Iterate that sub-array to create another sub-array multiplied by n+i, where i initally is 1 and incremented by 1 each time.
// Iteration should stop once main array is of length n.

multiplicationTable = function (size) {
  return Array.from({ length: size }, (_, i1) =>
    Array.from({ length: size }, (_, i2) => (i1 + 1) * (i2 + 1))
  )
}
