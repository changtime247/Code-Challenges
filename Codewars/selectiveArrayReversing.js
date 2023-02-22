// 6 kyu
// Selective Array Reversing
// Given an array, return the reversed version of the array (a different kind of reverse though), you reverse portions of the array, you'll be given a length argument which represents the length of each portion you are to reverse.
// E.g
// selReverse([1,2,3,4,5,6], 2)
//  //=> [2,1, 4,3, 6,5]
// if after reversing some portions of the array and the length of the remaining portion in the array is not up to the length argument, just reverse them.
// selReverse([2,4,6,8,10,12,14,16], 3)
//  //=> [6,4,2, 12,10,8, 16,14]
// selReverse(array, length)
// array - array to reverse
// length - length of each portion to reverse
// Note : if the length argument exceeds the array length, reverse all of them, if the length argument is zero do not reverse at all.

// Given an array of values and an integer, length.
// Return a new array consisting of the same values from arg-array but every length segment reversed.
// Ex:
// selReverse([2,4,6,8,10,12,14,16], 3)     --> [6,4,2,12,10,8,16,14]
// selReverse([1,2,3,4,5,6], 2)             --> [2,1,4,3,6,5]
// selReverse([1,2,3,4,5,6], 0)             --> [1,2,3,4,5,6]
// selReverse([1,2,3,4,5,6], 1)             --> [1,2,3,4,5,6]
// selReverse([1,2,3,4,5,6], 10)            --> [6,5,4,3,2,1]
// If the arg-integer provided is 0, return the arg-array.
// If the arg-integer provided is greater than the length of the arg-array, return the entire arg-array in reverse.
// Create an empty array.
// Otherwise, iterate through the arg-array in segments of size arg-integer.
//      At each iteration, reverse the segment and concat to newly created array.
// At the end of the iteration, return the newly created array.

function selReverse(array, length) {
  if (length === 0) return array
  if (length > array.length) return array.reverse()
  let i = 0
  let newArr = []
  while (i < array.length) {
    newArr = newArr.concat(array.slice(i, i + length).reverse())
    i += length
  }
  return newArr
}
