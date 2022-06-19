// 7 kyu
// Digital cypher vol 2

// Digital Cypher assigns to each letter of the alphabet unique number. For example:

//  a  b  c  d  e  f  g  h  i  j  k  l  m
//  1  2  3  4  5  6  7  8  9 10 11 12 13
//  n  o  p  q  r  s  t  u  v  w  x  y  z
// 14 15 16 17 18 19 20 21 22 23 24 25 26
// Instead of letters in encrypted word we write the corresponding number, eg. The word scout:

//  s  c  o  u  t
// 19  3 15 21 20
// Then we add to each obtained digit consecutive digits from the key. For example. In case of key equal to 1939 :

//    s  c  o  u  t
//   19  3 15 21 20
//  + 1  9  3  9  1
//  ---------------
//   20 12 18 30 21

//    m  a  s  t  e  r  p  i  e  c  e
//   13  1 19 20  5 18 16  9  5  3  5
// +  1  9  3  9  1  9  3  9  1  9  3
//   --------------------------------
//   14 10 22 29  6 27 19 18  6  12 8
// Task
// Write a function that accepts an array of integers code and a key number. As the result, it should return string containg a decoded message from the code.

// Input / Output
// The code is a array of positive integers.
// The key input is a positive integer.

// Example
// decode([ 20, 12, 18, 30, 21],1939);  ==> "scout"
// decode([ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8],1939);  ==>  "masterpiece"

// ----------------------
// Parameters: Given a secret message. It is an array of integers from 1 to 26, inclusive, which corresponds to the letters of the alphabet, in lowercase.
// Also given a number which is the code by which the array of integers can be decoded. It is by adding the array integers by their corresponding digits in code (index based)
// Return the decyphered message (the decyphered code as a string)
// Examples:
// decode([ 20, 12, 18, 30, 21], 1939)  'scout'
// decode([ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 1939)  'masterpiece'
// decode([ 15, 19, 20, 3, 6, 24, 20, 23, 23, 15 ] 2) 'mqradvruum'
// decode([ 13, 13, 25, 5, 6, 13, 24, 14, 28, 28, 18, 8, 28, 20, 13, 3, 25, 23, 17, 11 ] 2) 'kkwcdkvlzzpfzrkawuoi'
// Pseudocode:
// Map the array. Inside, use String.fromCharCode method.
// Value to use for fromCharCode method is derived from subtracting the number at index i (of the code parameter) from the value at index i (of array)
// If the code parameter is not long enough (i.e. i is greater than length of code parameter), treat the code paramter as repeating.
// Add 96 to value before passing into String.fromCharCode(), since UNICODE values for lower case start at 97 (and a is 1, b is 2, c is 3 ... z is 26)
// Join the array of letters and return

function decode(code, n) {
  return code.map((e, i) =>
    String.fromCharCode(e - `${n}`[i % `${n}`.length] + 96)
  ).join``
}
