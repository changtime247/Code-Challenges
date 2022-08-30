// 7 kyu
// Substituting Variables Into Strings: Padded Numbers
// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.
// Example:
// solution(5) // should return "Value is 00005"
// STRINGSFUNDAMENTALS

// ----------------------
// Parameter: Given a number.
// Return a string that gives us the value of the number in the following format:
// "Value is VALUE" where VALUE is given with five digits, regardless of what numeric value it is (ex 00000)
// Examples:
// solution(0),"Value is 00000"
// solution(5),"Value is 00005"
// solution(1204),"Value is 01204"
// solution(109),"Value is 00109"
// Pseudocode: Turn numeric value given as argument into string.
// Until the length is 5, pad the string with '0'.
// Return string expression stating the value, `Value is <<value>>`

function solution(value) {
  return `Value is ${value.toString().padStart(5, '0')}`
}
