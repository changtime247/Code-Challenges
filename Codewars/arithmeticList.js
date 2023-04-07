// 7 kyu
// Arithmetic List!
// In this kata, you will write an arithmetic list which is basically a list that contains consecutive terms in the sequence.
// You will be given three parameters :
// first the first term in the sequence
// c the constant that you are going to ADD ( since it is an arithmetic sequence...)
// l the number of terms that should be returned
// Useful link: Sequence
// Be sure to check out my Arithmetic sequence Kata first ;)
// Don't forget about the indexing pitfall ;)

// Given three arguments:
//      (1) an integer (representing the first value in a series of values)
//      (2) an integer (representing the difference between any two consecutive values in the series)
//      (3) an integer (representing the number of values in the series)
// Return the series of values as an array.
// Take into consideration the index (i) to determine the ith value by multiplying (2) and adding (1).

var seqlist = function (first, c, l) {
  return Array.from({ length: l }, (_, i) => first + c * i)
}
