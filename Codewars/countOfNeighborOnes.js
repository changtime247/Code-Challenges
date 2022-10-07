// 7 kyu
// Counter of neighbor ones
// Tranform of input array of zeros and ones to array in which counts number of continuous ones.
// If there is none, return an empty array
// Example
// [1, 1, 1, 0, 1] -> [3,1]
// [1, 1, 1, 1, 1] -> [5]
// [0, 0, 0, 0, 0] -> []

// ----------------------
// Parameters: Given an array of 1s and 0s.
// Return an array of values corresponding to the lengths of continuous 1s in the argument array.
// Return an empty array if there are no continuous 1s.
// Examples:
// onesCounter([1, 1, 1, 0, 1]), [3,1]
// onesCounter([1, 1, 1, 1, 1]), [5]
// onesCounter([0, 0, 0, 0, 0]), []
// Pseudocode:
// Create an empty array to hold continuous 1s' lengths.
// Iterate through array.
// Within iteration check if element is 1.
// If it is the first 1, in the series, start measuring its length.
// If it is not the first 1, continue measuring its length.
// If continuous 1 is broken (meaning element is 0), add the measured length to the newly created array.

function onesCounter(input) {
  let continuousOnesLengths = []
  let measuredLength = 0
  let wePassedOurFirstOne = false
  for (let i = 0; i < input.length; i++) {
    if (wePassedOurFirstOne && input[i] === 0) {
      if (measuredLength !== 0) {
        continuousOnesLengths.push(measuredLength)
      }
      measuredLength = 0
    } else if (
      wePassedOurFirstOne &&
      i + 1 === input.length &&
      input[i] === 1
    ) {
      if (measuredLength === 0) {
        continuousOnesLengths.push(1)
      } else {
        continuousOnesLengths.push(++measuredLength)
      }
    } else if (input[i] === 1) {
      if (i + 1 === input.length) {
        continuousOnesLengths.push(++measuredLength)
      }
      wePassedOurFirstOne = true
      measuredLength++
    }
  }
  return continuousOnesLengths
}
