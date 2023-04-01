// 7 kyu
// Decreasing Inputs
// This kata is all about adding numbers.
// You will create a function named add. It will return the sum of all the arguments. Sounds easy, doesn't it?
// Well Here's the Twist. The inputs will gradually decrease with their index as parameter to the function.
//   add(3,4,6);
//   /*
//   returns ( 3 / 1 ) + ( 4 / 2 ) + ( 6 / 3 ) = 7
//   */
// Remember the function will return 0 if no arguments are passed and it must round the result if sum is a float.
// Example
//   add(); //=> 0
//   add(1,2,3); //=> 3
//   add(1,4,-6,20); //=> 6

// Given number arguments.
// If no argument is given, return 0.
// Otherwise, return the rounded sum of the arguments divided by their respective index (1-based)
// Ex:
// add(), 0
// add(100, 200, 300), 300
// add(2), 2
// add(4, -3, -2), 2
// add(-1, -2, -3, -4), -4
// Create a variable initialized to 0.
// Iterate through the arguments, adding to the newly created variable the arg-number divided by its index (1-based).
// Return the variable rounded to nearest integer.

function add(...args) {
  return Math.round(args.reduce((a, c, i) => (a += c / (i + 1)), 0))
}
