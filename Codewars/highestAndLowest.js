// 7 kyu
// Highest and Lowest

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples:
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes:
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// ----------------------
// parameters: a series of numbers given as a string. the numbers are separated by a space
// return the highest value and lowest value, separated by a space, as one string
// examples:
// highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4") --> "42 -9"
// highAndLow("1 2 3")                        --> "3 1"
// pseudocode: split the numbers and sort them in descending order
// return a string of the max and min values (or index 0 if in descending order and also index 0 but if in ascending order, respectively)

function highAndLow(numbers){
    let splitsort = numbers.split(' ').sort((a,b)=>b-a);
    return splitsort[0] + ' ' + splitsort.reverse()[0];
}