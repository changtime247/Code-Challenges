// 8 kyu
// Short Long Short

// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ----------------------
// parameters: two strings given
// return string
// Examples
// ("1", "22") --> "1221"
// ("22", "1") --> "1221"
// pseudocode: check which string is longer and concatenate like this: short + long + short


function solution(a, b){
    return a.length>b.length?b+a+b:a+b+a;
}