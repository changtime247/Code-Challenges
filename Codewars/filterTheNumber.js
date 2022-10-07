// 7 kyu

// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

// ----------------------
// parameters: given a string consisting of numbers and letters
// return all the numbers of the string as one numeric value
// examples:
// '123'                              --> 123
// 'a1b2c3'                           --> 123
// 'aa1bb2cc3dd'                      --> 123
// 'ce539eb6f15edc3179eddbf376f515cb' --> 5396153179376515
// '1d519c5d8f5e05bd9369305784ca6f41' --> 1.5195850593693058e+21
// 'c47a1e9a8912137f23375f0e7ce23e63' --> 4.719891213723375e+21
// pseudocode: split parameter
// reduce array
// if value is greater than -1 (meaning it is a numeric value from 0 through 9), then concatenate to accumulator
// else just leave accumulator as is.
// set initial value as empty string
// use unary + to change return value as number (and not a string)

var FilterString = function(value) {
    return +(value.split``.reduce((a,v)=>v>-1?a+v.toString():a,''));
}