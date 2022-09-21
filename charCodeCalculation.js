// 7 kyu
// Char Code Calculation
// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:
// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':
// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:
//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

// ----------------------
// Parameter: Given a string.
// Return a number calculated from taking the difference between (a) sum of all digits of total1 and (b) sum of all digits total2.
// Total1 is the string's charCode values concatenated, as strings.
// Total2 is the same as above except all 7's are replaced with 1's.
// Examples:
// calc('abcdef'), 6
// calc('ifkhchlhfd'), 6
// calc('aaaaaddddr'), 30
// calc('jfmgklf8hglbe'), 6
// calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'), 96
// Pseudocode:
// Iterate through string to replace each letter of string with charCode value of that letter.
// Create another string like the one above except replace all 7s with 1s.
// Sum all digits for total1. Do the same for total2.
// Return the difference between the two.

function calc(x) {
  let total1 = x.split``.map((e) => e.charCodeAt(0)).join``
  let total2 = total1.split``.map((e) => (e == 7 ? '1' : e)).join``
  return +sumOfAllDigits(total1) - +sumOfAllDigits(total2)
}
function sumOfAllDigits(num) {
  return num.toString().split``.reduce((a, c) => a + +c, 0)
}
