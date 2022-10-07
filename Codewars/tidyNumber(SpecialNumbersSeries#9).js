// 7 kyu
// Tidy Number (Special Numbers Series #9)
// A Tidy number is a number whose digits are in non-decreasing order.
// Task
// Given a number, Find if it is Tidy or not .
// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// Number passed is always Positive .
// Return the result as a Boolean
// Input >> Output Examples
// tidyNumber (12) ==> return (true)
// Explanation:
// The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .
// tidyNumber (32) ==> return (false)
// Explanation:
// The Number's Digits { 3, 2} are not in non-Decreasing Order (i.e) 3 > 2 .
// tidyNumber (1024) ==> return (false)
// Explanation:
// The Number's Digits {1 , 0, 2, 4} are not in non-Decreasing Order as 0 <= 1 .
// tidyNumber (13579) ==> return (true)
// Explanation:
// The number's digits {1 , 3, 5, 7, 9} are in non-Decreasing Order .
// tidyNumber (2335) ==> return (true)
// Explanation:
// The number's digits {2 , 3, 3, 5} are in non-Decreasing Order , Note 3 <= 3

// ----------------------
// Parameter: Given a number.
// Return boolean, indicating whether argument number is a tidyNumber or not.
// A tidyNumber is a number in which each digit, going from left to right, is non-decreasing.
// Examples:
// tidyNumber(12), true
// tidyNumber(102), false
// tidyNumber(9672), false
// tidyNumber(2789), true
// tidyNumber(2335), true
// Pseudocode:
// Create variable set to true. This variable will represent whether argument is a tidyNumber.
// Split number into its individual digits.
// Compare digits from left to right.
// If any given left digit is not less than or equal to right digit, then set variable to false.
// Return variable.

function tidyNumber(n) {
  return n.toString().split``.reduce((a, c, i, r) => {
    if (c > r[i + 1 || i]) a = false
    return a
  }, true)
}
