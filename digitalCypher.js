// 7 kyu
// Digital cypher

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
// Write a function that accepts str string and key number and returns an array of integers representing encoded str.

// Input / Output
// The str input string consists of lowercase characters only.
// The key input number is a positive integer.

// Example
// Encode("scout",1939);  ==>  [ 20, 12, 18, 30, 21]
// Encode("masterpiece",1939);  ==>  [ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]

// ----------------------
// Parameters: Given a string and a number
// Return an array of numbers, with same length as string, representing that string as numbers based on UTF-16 code (Unicode code point)
// Examples:
// encode("scout",1939)          -->  [ 20, 12, 18, 30, 21 ]
// encode("masterpiece",1939)    -->  [ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8 ]
// encone("ruyh",2)              -->  [ 20, 23, 27, 10 ]
// enconde("frtxrpgx",2)         -->  [ 8, 20, 22, 26, 20, 18, 9, 26 ]
// encode("liirhsqoqnemxlzm",2)  -->  [ 14, 11, 11, 20, 10, 21, 19, 17, 19, 16, 7, 15, 26, 14, 28, 15 ]
// Pseudocode: (note: string will always be lower case and key will not be negative)
// First, turn the number argument, the key, to an array of the individual digits of number and assign it to a new variable, key.
// Next, since the return value is an array that should have the same length as the string argument, use map method on split string.
// The value at whatever index of the array will correspond with charCodeAt at the same index of string argument.
// Subtract corresponding key value from the Unicode code number value (using modulo to be able to loop around the key).
// (first charcode minus first key value: second charcode, second key value: third, third... so on. BUT if there are less key values than there are unicode code values, then start again from first key value, then second...)
// Use unary plus operator to turn key value, which is a string, to a number.
// Return entire map expression.

function encode(str,  n){
    let k = n.toString().split``;
    return str.split``.map((e,i,r)=>{
        return str.charCodeAt(i)-96+ +(k[i%k.length]);
    });
}