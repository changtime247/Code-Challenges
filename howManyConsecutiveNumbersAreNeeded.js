// 7 kyu
// How many consecutive numbers are needed?
// Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.
// For example:
// If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.

// ----------------------
// Parameter: Given an array of integers.
// Return the count of additional integers needed in array to make it an array of continuous consecutive integers (from first index to last)
// Examples:
// consecutive([4, 8, 6])     -->   2
// consecutive([1, 2, 3, 4])  -->   0
// consecutive([1, 2, 3, 10]) -->   6
// consecutive([])            -->   0
// consecutive([1])           -->   0
// Pseudocode:
// The range of the array (or the difference between lowest and highest numbers) gives us the number of items that should be there for an array to be consecutive from start to end (e.g. an array of [1,2,3,4] has 4 items and 4-1+1 is 4).
// Subtract the length of the argument (the number of elements actually in the array) from the range (number of elements that should be there).
// Return difference.

function consecutive(arr) {
  let range = Math.max(...arr) - Math.min(...arr) + 1
  return arr.length > 0 ? range - arr.length : 0
}
