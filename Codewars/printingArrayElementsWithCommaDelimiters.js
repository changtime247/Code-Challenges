// 8 kyu
// Printing Array elements with Comma delimiters

// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

// Note: if this seems too simple for you try the next level

// ----------------------
// parameter: given array of elements
// return the array joined with a comma as the delimiter
// example:
// [2,4,5,2] --> "2,4,5,2"
// pseudocode: join the array using a comma as a delimiter

function printArray(array){
    return array.join(',');
}