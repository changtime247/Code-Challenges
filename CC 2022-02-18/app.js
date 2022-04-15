// 8 kyu
// Sum The Strings

// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

// ----------------------
// parameters: two numbers given as strings
// return the sum of the two strings
// examples
// "4",  "5"  -->  "9"
// "34", "5"  -->  "39"
// "", ""     -->  "0"
// "2", ""    -->  "2"
// "-5", "3"  -->  "-2"
// pseudocode: change a and b from strings into numbers. 
// get the sum of the numbers.
// turn sum into a string and return

const sumStr = (a,b) => (+a + +b).toString();