// 8 kyu

// Be Concise III - Sum Squares
// You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array. For example:

// sumSquares([1,2,3,4,5]) === 55 // 1 ** 2 + 2 ** 2 + 3 ** 2 + 4 ** 2 + 5 ** 2
// sumSquares([7,3,9,6,5]) === 200
// sumSquares([11,13,15,18,2]) === 843
// Shorten the code such that it meets the requirements.

// A few hints:

// Try researching about built-in Array methods; they may help shorten your code a lot
// Good luck!

// ----------------------
// parameters: array given of arbitrary numbers
// return shortened version of the code such that the return value is the sum of all the elements raised to the second power
// examples:
// sumSquares([1,2,3,4,5])                      -->      55
// sumSquares([7,3,9,6,5])                      -->      200
// sumSquares([11,13,15,18,2])                  -->      843
// sumSquares([-5,-4,-3,-2,-1,0,1,2,3,4,5])     -->      110
// pseudocode: since we are looping through the array and returning, ultimately, one value,
// use reduce method
// add each value multiplied by itself to the accumulator
// set initial value at 0

function sumSquares(array) {
    return array.slice().map(x=>x**2).reduce((a,v)=>a+v,0);
}