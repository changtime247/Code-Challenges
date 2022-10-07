// 7 kyu
// Number climber
// For every positive integer N, there exists a unique sequence starting with 1 and ending with N and such that every number in the sequence is either the double of the preceeding number or the double plus 1.
// For example, given N = 13, the sequence is [1, 3, 6, 13], because . . . :
//  3 =  2*1 +1
//  6 =  2*3
//  13 = 2*6 +1
// Write a function that returns this sequence given a number N. Try generating the elements of the resulting list in ascending order, i.e., without resorting to a list reversal or prependig the elements to a list.

// ----------------------
// Parameter: Given a positive integer.
// Return an array of numbers representing the sequence of integers to get from 1 to the argument value, where the sequence is either doubling the previous number or doubling the previous number and adding one.
// Examples:
// climb(1)   -->  [1]
// climb(10)  -->  [1, 2, 5, 10]
// climb(13)  ->  [13] -> [6, 13] -> [3, 6, 13] --> [1, 3, 6, 13]
// Pseudocode: 
// Create empty array.
// Array will hold all values from n to 1 (working backwards)
// Use a loop work from n to 1 (as long as n is not equal to 1). 
// If n is odd, subtract one before halving.  
// If n is even, simply halve. 
// Return array with all sequence values from 1 to n.

function climb(n) {
  let ans = []
  while (n !== 1) {
    ans.unshift(n)
    n = n % 2 ? (n - 1) / 2 : n / 2
  }
  return [1, ...ans]
}