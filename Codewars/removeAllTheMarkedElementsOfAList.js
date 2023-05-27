// 7 kyu
// Remove All The Marked Elements of a List
// Define a method/function that removes from a given array of integers all the values contained in a second array.
// Examples (input -> output):
// * [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
// * [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
// * [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]
// Enjoy it!!

// Given an array of integers and another array of integers.
// Return an array of integers that are in the first but not in the second argument.
// Ex:
// l.remove_([1, 1, 2 ,3 ,1 ,2 ,3 ,4], [1, 3]), [2, 2, 4]
// l.remove_([1, 1, 2 ,3 ,1 ,2 ,3 ,4, 4, 3 ,5, 6, 7, 2, 8], [1, 3, 4, 2]), [5, 6 ,7 ,8]
// l.remove_([8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2 , 3], [2, 4, 3]), [8, 7, 6, 5, 1]
// l.remove_([4, 4, 2 , 3], [2, 2, 4, 3]), []
// l.remove_( [], [2, 2, 4, 3]), []
// Make a new set from values_list (2nd arg).
// Iterate through 1st arg to keep only the values not found in set.

Array.prototype.remove_ = function (integer_list, values_list) {
  return integer_list.filter((n) => !new Set(values_list).has(n))
}
