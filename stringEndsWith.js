// 7 kyu
// String ends with?

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// ----------------------
// parameters: two strings. does the one end with the other?
// return boolean
// Examples
// solution('abc', 'bc') --> returns true
// solution('abc', 'd')  --> returns false
// pseudocode: use built in string method endsWith to see if str ends with the ending

function solution(str, ending){
    return str.endsWith(ending);
}