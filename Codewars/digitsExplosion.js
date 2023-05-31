// 7 kyu
// Digits explosion
// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
// Examples
// explode("312")
// should return :
// "333122"
// explode("102269")
// should return :
// "12222666666999999999"

// Given a string of numbers.
// Return a string such that each number in argument is repeated that-number's-value times.
// Ex:
// explode("312"), "333122"
// explode("102269"), "12222666666999999999"
// explode("0"), ""
// explode("000"), ""
// explode("123"), "122333
// Create variable initialized to an empty string.
// Iterate through argument:
//      concat each digit, repeated digit amount of times, to the new variable.

function explode(s) {
  return s.split``.reduce((a, c) => (a += c.repeat(+c)), '')
}
