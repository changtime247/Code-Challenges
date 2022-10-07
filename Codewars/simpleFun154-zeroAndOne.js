// 7 kyu
// Simple Fun #154: Zero And One

// You have a string of length n consisting of zeroes and ones. Consider the following operation:

// Choose any two adjacent positions in the string
// If one of them is 0, and the other one is 1, 
// remove these two digits from the string.
// What is the length of the smallest string that you can get after applying this operation multiple times?

// Example
// For s = "01010", the result should be 1.

// "01010" -> " 010" -> " 0"

// For s = "110100", the result should be 2.

// "110100" -> "1 100" -> "1 0"

// Note that after the operations, the remaining digits are separated by spaces and thus not adjacent ;-)

// Input/Output
// [input] string s
// The initial string.

// [output] an integer
// The minimum length of the string that may remain after applying the described operations several times.

// ----------------------
// parameters: string of arbitrary length given. string consists of only '0' and '1'. 
// modify string as follows: remove all combinations of '01' and '10' in the string. 
// return the length of the string after modification
// examples
// "01010"      -->     1
// "11101111"   -->     6
// "01"         -->     0
// "10"         -->     0
// "110110"     -->     2
// "110100"     -->     2
// pseudocode: remove 01 and 10 combinations of the string by splitting on that two-char set and joining 
// repeat split with the other set and join
// return length

function zeroAndOne(s){
    return s.split('01').join('').split('10').join('').length;
}