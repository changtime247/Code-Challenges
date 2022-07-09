// 6 kyu
// Calculate the function f(x) for a simple linear sequence (Easy)
// For any given linear sequence, calculate the function [f(x)] and return it as a string.
// Assumptions for this kata are:
// the sequence argument will always contain 5 values equal to f(0) - f(4).
// the function will always be in the format "nx +/- m", "x +/- m", "nx', "x" or "m"
// if a non-linear sequence simply return "Non-linear sequence" or Nothing in Haskell.
// Examples (input -> output):
// [0, 1, 2, 3, 4]   -> "f(x) = x"
// [0, 3, 6, 9, 12]  -> "f(x) = 3x"
// [1, 4, 7, 10, 13] -> "f(x) = 3x + 1"
// [0, 0, 1, 1, 1]   -> "Non-linear sequence"

// ----------------------
// Parameter: Given an array of five integers.
// If the array is part of a linear sequence (formattable onto the formula f(x) = nx +/- m)
// (i.e., the line equation: y=mx +/- b),
// then return the string-ified version of the function of the linear sequence.
// If array is not part of linear sequence, then return 'Non-linear sequence'.
// Examples:
// getFunction([0, 1, 2, 3, 4])        -->     "f(x) = x"
// getFunction([0, 3, 6, 9, 12])       -->     "f(x) = 3x"
// getFunction([1, 4, 7, 10, 13])      -->     "f(x) = 3x + 1"
// getFunction([0, -4, -8, -12, -16])  -->     "f(x) = -4x"
// getFunction([0, -1, -2, -3, -4])    -->     "f(x) = -x"
// getFunction([2, 1, 0, -1, -2])      -->     "f(x) = -x + 2"
// getFunction([-1, -2, -3, -4, -5])   -->     "f(x) = -x - 1"
// getFunction([-1, -1, -1, -1, -1])   -->     "f(x) = -1"
// Pseudocode:
// Deduce function from the given values.
// Essentially, if array is a linear sequence, and if values (y-values) and indices (x-values) are taken as coordinate pairs,
// the sequence is 'graph-able', on a Cartesian coordinate plane, as a line.
// A simple example would be the sequence, [0, 1, 2, 3, 4].
// The (x,y) (i.e. (input, output)) coordinates would come out to:
// [(0,0), (1,1), (2,2), (3,3), (4,4)]
// To deduce function from coordinates:
// First, find the constant (m);
// Second, find the slope (n).
// Once formula deduced,
// if array is part of a linear function, then format, string-ify and return the function.
// Else, if not part of linear function, then return 'Non-linear sequence'.

function getFunction(sequence) {
  const n = sequence[1] - sequence[0],
    nOut = n === 0 || n === 1 ? '' : n === -1 ? '-' : n,
    m = sequence[0],
    mOut =
      n === 0 && m
        ? `${m}`
        : m > 0
        ? ` + ${m}`
        : m < 0
        ? ` - ${Math.abs(m)}`
        : '',
    x = sequence.every((n) => n === sequence[0]) ? '' : 'x',
    f = (idx) => {
      return n * idx + m
    }

  return sequence.every((e, i) => f(i) === e)
    ? `f(x) = ${nOut}${x}${mOut}`.trim()
    : `Non-linear sequence`
}
