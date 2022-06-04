// 7 kyu
// Largest Elements

// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

// ----------------------
// Parameters: Given a non-negative number and an array of numbers
// Return an array, which has a length equal to the argument number, containing the largest numbers of argument array
// Examples:
// largest(0,[1,2,3,4,8,7,6,5])                 -->   []
// largest(0,[ 10,9,8,7,6,5,4,3,2,1])           -->   []
// largest(2,[10,9,8,7,6,5,4,3,2,1])            -->   [9,10]
// largest(2,[-3,-2,-1,0,-9,-8,-7,-6,-4,-5]     -->   [-1, 0]
// largest(3,[5,1,5,2,3,1,2,3,5])               -->   [5,5,5]
// largest(7,[9,1,50,22,3,13,2,63,5])           -->   [3, 5, 9, 13, 22, 50, 63]
// Pseudocode:
// If argument number is 0, return empty array. 
// Otherwise, sort the argument in ascending order.
// Slice using the argument number, but negative.
// Use ternary operator to combine above lines and return entire expression

function largest(n,xs){
    return n?xs.sort((a,b)=>a-b).slice(-n):[];
}