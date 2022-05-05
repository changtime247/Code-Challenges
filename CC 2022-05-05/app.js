// 6 kyu
// Feynman's square question

// Feynman's squares
// Richard Phillips Feynman was a well-known American physicist and a recipient of the Nobel Prize in Physics. He worked in theoretical physics and pioneered the field of quantum computing.

// Recently, an old farmer found some papers and notes that are believed to have belonged to Feynman. Among notes about mesons and electromagnetism, there was a napkin where he wrote a simple puzzle: "how many different squares are there in a grid of NxN squares?".

// For example, when N=2, the answer is 5: the 2x2 square itself, plus the four 1x1 squares in its corners.

// Task
// Complete the function that solves Feynman's question in general. The input to your function will always be a positive integer.

// Examples
// 1  -->   1
// 2  -->   5
// 3  -->  14
// (Adapted from the Sphere Online Judge problem SAMER08F by Diego Satoba)

// ----------------------
// parameters: arbitrary positive integer given
// return a number indicative of the number of different squares there are within that square of length n (sub-squares can overlap)
// examples:
// countSquares(1)     -->     1
// countSquares(2)     -->     5
// countSquares(3)     -->     14
// countSquares(4)     -->     30
// countSquares(5)     -->     55
// countSquares(15)    -->     1240
// pseudocode: any square given will have n/1 squares in it.
// any square greater than 2 will include 1x1 and 2x2 squares
// any square greater than 3 will include 1x1, 2x2 and 3x3 squares
// any square greater than 4 will include 1x1, 2x2, 3x3 and 4x4 squares
// and so on...
// the number of any given square-size is determined by squaring each integer from 1 to n
// countSquares(1)     -->     1**2 = 1
// countSquares(2)     -->     1**2 + 2**2 = 5
// countSquares(3)     -->     1**2 + 2**2 + 3**2 = 14
// countSquares(4)     -->     1**2 + 2**2 + 3**2 + 4**2 = 30
// countSquares(5)     -->     1**2 + 2**2 + 3**2 + 4**2 + 5**2 = 55
// countSquares(6)     -->     1**2 + 2**2 + 3**2 + 4**2 + 5**2 + 6**2 = 91
// countSquares(15)    -->     1**2 + 2**2 + 3**2 + 4**2 + 5**2 + 6**2 + 7**2 + 8**2 + 9**2 + 10**2 + 11**2 + 12**2 + 13**2 + 14**2 + 15**2 = 1240
// countSquares(n)     -->     1**2 + 2**2 + ... (n-2)**2 + (n-1)**2 + n**2
// logic behind this:
// all squares will have at least 1 1x1 square (hence n**2). a 10x10 square will have 100 1x1 squares in it. similarly, a 12x12 square has 144 1x1 squares. or, a nxn square has n**2 1x1 squares
// all squares greater than 2 will have at least n-1 2x2 square (hence (n-1)**2). a 10x10 square will have 100 1x1 squares in it. similarly, a 12x12 square has 144 1x1 squares
// all squares greater than 3 will have at least n-2 3x3 square (hence (n-1)**2). a 10x10 square will have 100 1x1 squares in it. similarly, a 12x12 square has 144 1x1 squares
// ...
// all squares greater than 2 will have 4 squares that are of size (n-1)x(n-1). hence, 2**2
// and all squares will include itself (the nxn sized square). hence, 1**2
// create an array of all positive integers from 1 to n, inclusive, raised to the second power
// return the sum of the array to get the total count of different squares in a nxn square

function countSquares(n){
    return Array.from({length:n}, (_,i)=>i+1).reduce((a,b)=>a+(b**2),0);
}