// 7 kyu
// Sum of two lowest positive integers

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// ----------------------
// parameters: array of positive integers given
// return sum of the two lowest integers
// examples
// [5, 8, 12, 19, 22]        -->     13 
// [15, 28, 4, 2, 43]        -->      6 
// [3, 87, 45, 12, 7]        -->     10 
// [23, 71, 33, 82, 1]       -->     24 
// [52, 76, 14, 12, 4]       -->     16 
// pseudocode: since the lowest two integers are being searched for,
// sort array ascending order
// return sum of index 0 and 1

function sumTwoSmallestNumbers(numbers) {  
    let min = numbers.sort((a,b)=>a-b)[0];
    let min2 = numbers.sort((a,b)=>a-b)[1];
    return min + min2;
}