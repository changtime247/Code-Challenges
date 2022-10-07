// 8 kyu
// Enumerable Magic #25 - Take the First N Elements

// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

// If you need help, here's a reference:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// ----------------------
// parameters: array of elements given, along with a number.
// return an array of the first few elements, up to the number parameter
// examples
// take([0, 1, 2, 3, 5, 8, 13], 3) --> [0, 1, 2]
// pseudocode: 
// using slice, start from index 0 and end at index equal to the second parameter value
// slice is returning a new array btw

function take(arr, n) {
    return arr.slice(0, n)
}