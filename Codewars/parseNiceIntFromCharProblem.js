// 8 kyu
// Parse nice int from char problem
// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
// Write a program that returns the girl's age (0-9) as an integer.
// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

// ----------------------
// parameters: string given of a fixed format. string contains a random int from 0 through 9.
// return the only number in (or index 0 of) the string
// Examples
// "4 years old" --> 4
// "5 years old" --> 5
// pseudocode: return a number-ized value at index 0

function getAge(inputString){
    return +inputString[0]
}