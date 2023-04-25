// 7 kyu
// How many arguments
// args_count(1, 2, 3) -> 3
// args_count(1, 2, 3, 10) -> 4

// Given a function that may or may not have arguments.
// Return the number of arguments passed to the function.
// Examples above.
// Use rest operator.

function args_count(...args) {
  return args.length
}
