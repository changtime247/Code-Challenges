// 7 kyu
// Descending Order

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// ----------------------
// parameters: given integer
// return the largest possible value with simply rearranging the parameter's digits
// no negative parameters
// examples:
// descendingOrder(0)           -->     0
// descendingOrder(1)           -->     1
// descendingOrder(111)         -->     111
// descendingOrder(15)          -->     51
// descendingOrder(1021)        -->     2110
// descendingOrder(123456789)   -->     987654321
// pseudocode: treat n as a string
// split into individual chars
// sort the individual chars
// join
// return the result as a number

function descendingOrder(n){
    return +(n.toString().split('').sort((a,b)=>b-a).join(''));
}