// 7 kyu
// Folding your way to the moon
// Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you have, but exactly how many? Maybe it's time to write a program to figure it out.

// You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
// (If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)

// Note: Of course you can't do half a fold. You should know what this means ;P

// Also, if somebody is giving you a negative distance, it's clearly bogus and you should yell at them by returning null.

// ----------------------
// Parameter: Given a number representing distance to moon
// Return the number of folds it takes for a piece of paper, 0.0001m thick, to have a thickness of argument passed in.
// (note: each fold doubles thickness)
// Examples:
// foldTo(384000000)               -->     42
// foldTo(0.007163765464543862)    -->     7
// foldTo(5193329542.40819)        -->     46
// Pseudocode:
// Set counter variable to 0.
// Set initial thickness variable to 0.0001.
// While initial thickness is less than argument provided, fold paper and add one to counter.
// Once condition met, return number of folds.

function foldTo(distance) {
  let s = 0.0001,
    i = 0
  while (distance > s) {
    s *= 2
    i++
  }
  return distance < 0 ? null : i
}
