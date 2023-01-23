// 7 kyu
// Array Mash
// Mash 2 arrays together so that the returning array has alternating elements of the 2 arrays . Both arrays will always be the same length.
// eg. [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']

// Given two arrays.
// Return one array with elements from each array in alternating fashion.
// arrayMash([1, 2, 3], ['a', 'b', 'c']), [1, 'a', 2, 'b', 3, 'c']
// arrayMash([1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'e']), [1, 'a', 2, 'b', 3, 'c', 4, 'd', 5, 'e']
// arrayMash([1, 1, 1, 1], [2, 2, 2, 2]), [1, 2, 1, 2, 1, 2, 1, 2]
// arrayMash([1, 8, 'hello', 'dog'], ['fish', '2', 9, 10]), [1, "fish", 8, "2", "hello", 9, "dog", 10]
// arrayMash([null, null, 4], [NaN, null, 'hello']), [null, NaN, null, null, 4, "hello"]
// arrayMash([1], [2]), [1, 2]
// Create an empty array to hold values from both arrays (in an alternating fashion)
// Shift from both arrays and push to new array

function arrayMash(array1, array2) {
  return array1.reduce((a, c, i) => (a.push(c) && a.push(array2[i]), a), [])
}
