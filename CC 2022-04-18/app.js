// 7 kyu

// #'x' marks the spot

// ##Task:

// Given a two dimensional array, return the co-ordinates of 'x'.

// If 'x' is not inside the array, or if 'x' appears multiple times, return []

// The co-ordinates should be zero indexed.

// You should assume you will always get an array as input. The array will only contain 'x's and 'o's.

// Example test cases:

// 'Return an empty array if input is an empty array' => []

// [] 

// 'Return an empty array if no x found' => []

// [
//   ['o', 'o'],
//   ['o', 'o']
// ]

// 'Return an empty array if more than one x found' => []

// [
//   ['x', 'o'],
//   ['o', 'x']
// ]

// 'Return [0,0] when x at top left' => [0, 0]

// [
//   ['x', 'o'],
//   ['o', 'o']
// ]

// 'Return [4,6] for the example below' => [4, 6]

// [
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
// ]

// ----------------------
// parameters: 2-dimensional array given, with each sub-array consisting of either 'o' or 'x' (or empty array)
// if there is one 'x' in the parameter, return the index of the array with the x and the index of x (within the subarray), as an arary
// examples:
// noX: [
//     ['o', 'o'],
//     ['o', 'o']
// ],
// multipleX: [
//     ['x', 'o'],
//     ['o', 'x']
// ],
// topLeft: [
//     ['x', 'o'],
//     ['o', 'o']
// ]
// emptyArray), [], 'Return an empty array if x is an empty array'
// noX), [], 'Return an empty array if no x found'
// multipleX), [], 'Return an empty array if more than one x found'
// topLeft), [0, 0], 'Return [0,0] when x at top left'
// pseudocode: flatten the 2D array, using concat with the spread operator in parameter
// if a filtered flattened version of the array returns only one 'x', then function will proceed to locate the 'x'
// create a variable with a value of an empty array, placed first within function. this is to hold the answer
// using a loop, locate the index of sub-array and index of 'x'.
// push both to the answer holder
// return holder

const xMarksTheSpot = (input) => {
    let ans = [];
    if ([].concat(...input).filter(x=>x==='x').length===1){
      for(let i=0;i<input.length;i++){
        if(input[i].includes('x')){
            ans.push(i)
            ans.push(input[i].findIndex(x=>x=='x'))
        }
      }
    }
    return ans;
}