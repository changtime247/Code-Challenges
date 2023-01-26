// 6 kyu
// zipWith
// Implement zipWith
// zipWith takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
// The function value is one new array.
// If the arrays are of unequal length, the output will only be as long as the shorter one.
// (Values of the longer array are simply not used.)
// Inputs should not be modified.
// Examples
// zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
// zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]
// zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both forms are valid
// zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both are functions
// Input validation
// Assume all input is valid.

// Given a function and two arrays as arguments.
// Return a new array, in which each value is derived from performing function of ith values of the arrays.
// Note: new array length should be same as the length of the shorter of the two arg-arrays
// Create a new array
// Iterate through both arg-arrays.
//      At each iteration perform arg-function on ith values of arg-arrays and push resulting value into newly created array.

function zipWith(fn, a0, a1) {
  let min = Math.min(a0.length, a1.length)
  let a2 = []
  for (let i = 0; i < min; i++) {
    a2.push(fn(a0[i], a1[i]))
  }
  return a2
}
