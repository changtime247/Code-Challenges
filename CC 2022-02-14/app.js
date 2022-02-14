// 8 kyu
// ASCII Total

// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

// example:

// uniTotal("a") == 97 uniTotal("aaa") == 291

// ----------------------
// parameter: a string of arbitrary length given
// return the sum of the unicode of each char of string
// examples:
// ""                        -->  0
// "a"                       -->  97
// "b"                       -->  98
// "c"                       -->  99
// "d"                       -->  100
// "e"                       -->  101
// "aaa"                     -->  291
// "Mary Had A Little Lamb"  -->  1873
// pseudocode: first split string into individual char
// reduce each char to its ascii number and sum it to the accumulator
// return final value

function uniTotal(string) {
    return string.split('').reduce((a,v)=>a+v.charCodeAt(0),0);
}